/*
 * @author: zhidl
 * @Date: 2021-05-11 16:55:42
 * @description: 
 * @LastEditTime: 2021-05-13 10:58:42
 * @LastEditors: zhidl
 */

const _toString = Object.prototype.toString;

export function isPlainObject(obj: any): boolean {
	return _toString.call(obj) === '[object Object]';
}

export function isDef(v: any): boolean {
	return v !== undefined && v !== null;
}

export function isPromise(val: any): boolean {
	return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}

export function invokeWithErrorHandling(handler: Function, context: any, args: null | any[], vm: any, info: string) {
	let res = args ? handler.apply(context, args) : handler.call(context);
	return res;
}

export function def(obj: Object, key: string, val: any, enumerable?: boolean) {
	Object.defineProperty(obj, key, {
		value: val,
		enumerable: !!enumerable,
		writable: true,
		configurable: true
	});
}

const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj: Object | Array<any>, key: string): boolean {
  return hasOwnProperty.call(obj, key)
}

export function isObject (obj: any): boolean {
  return obj !== null && typeof obj === 'object'
}
export const hasProto = '__proto__' in {}


export function remove (arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}


const bailRE = /[^\w.$]/
export function parsePath (path: string): any {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}