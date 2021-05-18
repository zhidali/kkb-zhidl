/*
 * @author: zhidl
 * @Date: 2021-05-11 16:30:40
 * @description: 
 * @LastEditTime: 2021-05-18 10:54:02
 * @LastEditors: zhidl
 */

import { isPlainObject, invokeWithErrorHandling } from './util';
import Watcher from './watcher';
import Dep, { pushTarget, popTarget } from './dep';

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
		}
	}
};

function watch(expOrFn: string | Function, cb: any, options?: WatchOptions) {
	const vm: Component = obj;
	if (isPlainObject(cb)) {
		return createWatcher(vm, expOrFn, cb, options);
	}
	options = options || {};
	options.user = true;

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



console.log('111');
observe(obj);

setTimeout(() => {
	obj.a.b.c++;
}, 1000)

console.log(obj, 'objs');

watch(
	'a',
	(newV, oldV) => {
		console.log(newV);
	},
	{ deep: true }
);

watch(
	'a.b',
	() => {
		console.log('a.b');
	},
	{deep: true}
)

export default {
	watch,
	observe
};
