/*
 * @author: zhidl
 * @Date: 2021-05-11 18:37:52
 * @description: 
 * @LastEditTime: 2021-05-12 13:52:10
 * @LastEditors: zhidl
 */

import Dep, { pushTarget, popTarget } from './dep';

let uid = 0;

export default class Watcher {
  vm:Component;
  active: boolean;
  value: any;
  id: number;
  deps: Array<Dep>;
  newDeps: Array<Dep>;
	constructor(vm: Component, expOrFn: string | Function, cb: Function, options?: Object, isRenderWatcher?: boolean) {
    this.active = true;
    this.id = ++uid;
  }
  teardown() {
    if(this.active) {
      
    }
  }
  run() {
    if(this.active) {
      const value = this.get();
    }
  }

  get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    
  }
  update() {}

  addDep(dep:Dep) {

  }
}
