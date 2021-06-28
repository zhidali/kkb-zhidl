/*
 * @author: zhidl
 * @Date: 2021-06-26 17:17:45
 * @description: 
 * @LastEditTime: 2021-06-26 18:31:56
 * @LastEditors: zhidl
 */
// @ts-nocheck

// 手动实现bind
// 返回一个函数，
// 第一个参数是函数this指向，第二个参数是函数列表
// 当使用new的时候 用原函数实列子

Function.prototype.zBind = zBind;
Function.prototype.zCall = zCall
Function.prototype.zApply = zApply
function zBind(thisArg: any, ...args) {
  const fn = this;
  return function () {
    // 判断如果new 调用使用原函数
    if(new.target) {
      return new fn(...arguments)
    } else {
      const temKey = Symbol('f');
      thisArg && (thisArg[temKey] = fn);
      // 判断this指向有无传递
      if(thisArg) {
        return thisArg[temKey](...args);
      } else {
        return fn(...args)
      }
    }
  }
}

// 手动实现call
function zCall(thisArg: any, ...args) {
  const fn = this;
  if(new.target) {
    return new fn(...args)
  } else {
    const temKey = Symbol('f')
    thisArg && (thisArg[temKey] = fn);
    // 判断this指向有无传递
    if(thisArg) {
      return thisArg[temKey](...args);
    } else {
      return fn(...args)
    }
  }
}


function zApply(thisArg:any, args: any[]) {
  const fn = this;
  if(new.target) {
    return new fn(...args)
  } else {
    const temKey = Symbol('f')
    thisArg && (thisArg[temKey] = fn);
    // 判断this指向有无传递
    if(thisArg) {
      return thisArg[temKey](...args);
    } else {
      return fn(...args)
    }
  }
}






let arr = [1,2,3,55,3];
let call1 =  Math.max.zCall(null, ...arr);
let apply1 = Math.max.zApply(null, arr);
let bind1 = Math.max.zBind(null, ...arr)();
console.log(call1, apply1, bind1)


export default {}



