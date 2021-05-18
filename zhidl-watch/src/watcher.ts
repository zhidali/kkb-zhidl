/*
 * @author: zhidl
 * @Date: 2021-05-11 18:37:52
 * @description: 
 * @LastEditTime: 2021-05-18 11:27:14
 * @LastEditors: zhidl
 */

import Dep, { pushTarget, popTarget } from './dep';
import { isObject, parsePath, invokeWithErrorHandling, remove } from './util';
import { traverse } from './traverse';
interface SimpleSet {
  has(key: string | number): boolean;
  add(key: string | number): any;
  clear(): void;
}

let uid = 0;

export default class Watcher {
  vm:Component;
  active: boolean;
  value: any;
  id: number;
  deps: Array<Dep>;
  newDeps: Array<Dep>;
  cb:Function;
  depIds: SimpleSet;
  newDepIds: SimpleSet;
  getter: Function;
  deep:boolean;
	constructor(vm: Component, expOrFn: string | Function, cb: Function, options?: Object, isRenderWatcher?: boolean) {
    this.vm = vm;
    this.active = true;
    this.cb = cb;
    this.id = ++uid;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new Set();
    this.newDepIds = new Set();

    if(options) {
      // @ts-ignore
      this.deep = !!options.deep;
    }
    if(typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
    }
    this.value = this.get();
    
  }

  get() {
    pushTarget(this);
    console.log(1111);
    let value;
    const vm = this.vm;

    try {
      value = this.getter.call(vm, vm);
    } catch(e) {
      console.log(e);
    } finally {
      if(this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps()
    }
    return value;
  }

  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i]
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    // @ts-ignore
    tmp = this.deps
    this.deps = this.newDeps
    // @ts-ignore
    this.newDeps = tmp
    this.newDeps.length = 0
  }

  teardown() {
    if(this.active) {
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this)
      }
      this.active = false;
    }
  }
  run() {
    if(this.active) {
      const value = this.get();

      if(value !== this.value || isObject(value) || this.deep) {
        
        const oldValue = this.value;

        // console.log(value, oldValue, 'watch');

        this.value = value;

        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, '');
      }
    }
  }
  
  update() {
    this.run();
  }

  addDep(dep:Dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) { // 如果newDepIds 不包含当前key唯一id，那么就传入
      // 添加当前watcher 和 传入dep的关系
      this.newDepIds.add(id)
      this.newDeps.push(dep) // 当前dep
      // 反向给dep添加当前watcher关系
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }


}
