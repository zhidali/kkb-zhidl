/*
 * @author: zhidl
 * @Date: 2021-05-11 19:04:33
 * @description: 
 * @LastEditTime: 2021-05-11 19:12:18
 * @LastEditors: zhidl
 */
import { def } from './util';
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [ 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse' ];

methodsToPatch.forEach(function(method) {
	const original = arrayProto[method];
	def(arrayMethods, method, function mutator(...args) {
		const result = original.apply(this, args);
		const ob = this.__ob__;
		let inserted;
		switch (method) {
			case 'push':
			case 'unshift':
				inserted = args;
				break;
			case 'splice':
				inserted = args.slice(2);
				break;
		}
		// 如果使用 push unshift splice插入的是数组 或者对象的话，继续进行深度监听
		if (inserted) ob.observeArray(inserted);
		// notify change 通知更新
		ob.dep.notify();
		return result;
	});
});
