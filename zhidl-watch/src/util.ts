/*
 * @author: zhidl
 * @Date: 2021-05-11 16:55:42
 * @description: 
 * @LastEditTime: 2021-05-11 19:19:43
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