/*
 * @author: zhidl
 * @Date: 2021-05-11 16:30:40
 * @description: 
 * @LastEditTime: 2021-05-19 10:20:19
 * @LastEditors: zhidl
 */

import { isPlainObject, invokeWithErrorHandling } from './util';
import Watcher from './watcher';
import { pushTarget, popTarget } from './dep';

import { observe as cloneObserve} from './observer';

/**
 * watch监听
 * @param expOrFn 
 * @param cb 
 * @param options 
 */
 export function watch(o: any, expOrFn: string | Function, cb: any, options?: WatchOptions): () => void {
	const vm: Component = o;
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

function createWatcher(vm: Component, expOrFn: string | Function, handler: any, options?: Object) {
	if (isPlainObject(handler)) {
		options = handler;
		handler = handler.handler;
	}
	if (typeof handler === 'string') {
		handler = vm[handler];
	}
	return watch(vm, expOrFn, handler, options);
}

export const observe = cloneObserve;
