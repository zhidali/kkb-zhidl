let Vue = null;

class Store {
  constructor(options = {}) {
    // options 包括 state, mutations, actions, getters, modules 
    // 借用  new Vue变成响应式的

    
    store.getters = {};
    const wrappedGetters = options.getters || {};
    const computed = {};
    Object.keys(wrappedGetters).forEach(key => {
      computed[key] = () => wrappedGetters[key](store.state);
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key],
        enumerable: true
      })
    })

    store._vm = new Vue({
      data: {
        $$state: options.state
      },
      computed
    })

    // 保存⽤户配置的mutations选项
    store._mutations = options.mutations || {}

    // 保存⽤户编写的actions选项
    store._actions = options.actions || {}
    // 绑定commit上下⽂否则action中调⽤commit时可能出问题!!
    // 同时也把action绑了，因为action可以互调
    
    const store = this;
    const {
      commit,
      action
    } = store;
    this.commit = function boundCommit(type, payload) {
      commit.call(store, type, payload)
    }

    this.action = function boundAction(type, payload) {
      return action.call(store, type, payload)
    }

    
  }
  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('please use replaceState to reset state');
  }
  commit(type, payload) {
    // 获取type对应的mutation

    // entry 获取当前type对应 方法
    const entry = this._mutations[type]
    if (!entry) {
      console.error(`unknown mutation type: ${type}`);
      return
    }
    // 指定上下⽂为Store实例
    // 传递state给mutation
    entry(this.state, payload);
  }

  dispatch(type, payload){
    const entry = this._actions[type]

    if (!entry) {
      console.error(`unknown action type: ${type}`);
      return
    }
    entry(this, payload);
  }

  
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    // 组件内部需要使用 this.$store 调用
    // 当前this 为组件内

    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  })
}

export default {
  Store,
  install
}