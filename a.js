


function zNew(...args) {
  let params = args.slice(1);
  let fn = args[0];
  // 创建obj 链接this
  let obj = Object.create(fn.prototype);
  // 执行构造函数，获取结果
  let ret = fn.apply(obj, params);
  // 有结果返回结果，无返回构造函数this
  return ret || obj;
}


function func(num) {
  console.log(this.name, num);
}

let b1 = {
  name: 'b1',
  c: {
    name: 'c1'
  }
}
let b = func.bind(b1, 111);

b1.c.f = func;

func();
b();

b1.c.f();





