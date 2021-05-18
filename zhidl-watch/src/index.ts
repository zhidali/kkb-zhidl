/*
 * @author: zhidl
 * @Date: 2021-05-11 16:30:40
 * @description: 
 * @LastEditTime: 2021-05-18 11:51:27
 * @LastEditors: zhidl
 */

import { isPlainObject, invokeWithErrorHandling } from './util';
import Watcher from './watcher';
import { pushTarget, popTarget } from './dep';

import { observe } from './observer';

/**
 * watch监听
 * @param expOrFn 
 * @param cb 
 * @param options 
 */
 const obj = {
	a: {
		b: {
			c: 0
		},
		d: [{a:0}]
	}
};

function watch(expOrFn: string | Function, cb: any, options?: WatchOptions) {
	const vm: Component = obj;
	if (isPlainObject(cb)) {
		return createWatcher(vm, expOrFn, cb, options);
	}
	options = options || {};
	const watcher = new Watcher(vm, expOrFn, cb, options);

	if (options.immediate) {
		pushTarget();
		invokeWithErrorHandling(cb, vm, [ watcher.value ], vm, '');
		popTarget();
	}

	return function unwatchFn() {
		watcher.teardown();
	};
}

//
function createWatcher(vm: Component, expOrFn: string | Function, handler: any, options?: Object) {
	if (isPlainObject(handler)) {
		options = handler;
		handler = handler.handler;
	}
	if (typeof handler === 'string') {
		handler = vm[handler];
	}
	return watch(expOrFn, handler, options);
}


observe(obj);
// setInterval(() => {
// 	obj.a.d = 0;
// }, 1000)

// console.log(obj.a.d, 'objs');

watch(
	'a.d',
	(newV, oldV) => {
		console.log(newV, oldV, 'bbbb');
	},
	{deep: true, immediate: true}
)

export default {
	watch,
	observe
};
