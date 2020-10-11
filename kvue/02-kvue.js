// 冬瓜冬瓜我是西瓜 zhidl

// 响应式
function defineReactive(obj, key, val) {

  // 递归对象 深度遍历
  observe(val);

  // 利用到闭包
  // 创建 dep 实例， 与key 一一对应
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      // 依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // console.log('set', key, newVal);
        // 添加新key需要重新深递归
        observe(newVal)
        val = newVal;

        dep.notify();
      }
    }
  })
}


function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observer(obj);
}

// 观察$data
class Observer {
  constructor(value) {
    this.value = value;
    if (Array.isArray(value)) {
      // todo 数组的响应式
    } else {
      this.walk(value)
    }
  }

  walk(obj) {
    Object.keys(obj).forEach((k) => {
      defineReactive(obj, k, obj[k])
    })
  }
}

// 代理处理 this.$data
function proxy(vm) {
  Object.keys(vm.$data).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(val) {
        vm.$data[key] = val
      }
    })
  })

  Object.keys(vm.$methods).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$methods[key]
      },
      set(val) {
        throw new Error('事件不能设置')
      }
    })
  })
}

class KVue {
  constructor(options = {}) {
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;

    observe(this.$data);

    proxy(this);

    new Compile(options.el, this);
  }
}





// 解析模板

class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    const childNodes = el.childNodes;
    childNodes.forEach(node => {
      if (node.nodeType === 1) {
        // 元素 处理指令
        const attrs = node.attributes;
        Array.from(attrs).forEach((attr) => {
          const attrName = attr.name;
          const exp = attr.value;
          if (attrName.startsWith('k-')) {
            const dir = attrName.substring(2);
            this[dir] && this[dir](node, exp);
          }
          // @事件
          if (attrName.startsWith('@')) {
            const dir = attrName.substring(1);
            this[dir] && this[dir](node, exp);
          }
        })

      } else if (this.isInter(node)) {
        // 文本
        this.compileText(node);
      }

      if (node.childNodes.length) {
        this.compile(node);
      }
    })
  }
  click(node, exp) {
    node.addEventListener('click', () => {
      this.$vm[exp].call(this.$vm)
    });
  }
  update(node, exp, dir) {
    // 初始化
    const fn = this[dir + 'Updater'];
    fn && fn(node, this.$vm[exp])

    // 未来更新
    new Watcher(this.$vm, exp, (val) => {
      fn && fn.call(this.$vm, node, val, exp)
    })
  }

  // k-text
  text(node, exp) {
    // node.textContent = this.$vm[exp];
    this.update(node, exp, 'text');
  }
  textUpdater(node, value) {
    node.textContent = value;
  }

  // k-html
  html(node, exp) {
    this.update(node, exp, 'html');
  }
  htmlUpdater(node, value) {
    node.innerHTML = value;
  }

  // k-model
  model(node, exp) {
    this.update(node, exp, 'model');
    node.addEventListener('input', () => {
      this.$vm[exp] = node.value
    })
  }
  modelUpdater(node, value) {
    node.value = value;
  }

  // 编译文本
  compileText(node) {
    this.update(node, RegExp.$1, 'text');
  }
  // 是否为插值表达式
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}

// 监听器
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // 触发依赖收集
    Dep.target = this;
    this.vm[this.key];
    Dep.target = null;
  }

  // 执行更新操作
  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}


class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}