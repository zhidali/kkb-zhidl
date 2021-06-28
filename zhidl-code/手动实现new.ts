/*
 * @author: zhidl
 * @Date: 2021-06-26 17:09:50
 * @description: 
 * @LastEditTime: 2021-06-26 17:17:01
 * @LastEditors: zhidl
 */


type Targs = [(...args) => any, ...any[]]

function zNew(...args: Targs) {
  let params = args.slice(1);
  let fn = args[0];
  // 创建obj 链接this
  let obj = Object.create(fn.prototype);
  // 执行构造函数，获取结果
  let ret = fn.apply(obj, params);
  // 有结果返回结果，无返回构造函数this
  return ret || obj;
}


function A(name) {
  this.name = name;
}


let z = zNew(A, 'zzz')
console.log(z, '111');

export default {};