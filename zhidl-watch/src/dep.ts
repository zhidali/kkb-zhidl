/*
 * @author: zhidl
 * @Date: 2021-05-11 18:39:04
 * @description: 
 * @LastEditTime: 2021-05-13 11:13:49
 * @LastEditors: zhidl
 */

import type Watcher from './watcher';
import { remove } from './util';

let uid = 0;

export default class Dep{
  static target: Watcher | null | undefined;
  id: number; // dep唯一标示id
  subs: Array<Watcher>;
  constructor () {
    this.id = uid++
    this.subs = []
  }
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }
  depend() {
    if(Dep.target) {
      Dep.target.addDep(this);
    }
  };
  // 通知更新 遍历所有的watcher 执行内部的update
  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  };
  removeSub(sub: Watcher) {
    remove(this.subs, sub)
  }
}

Dep.target = null;
const targetStack:Array<any> = [];

export function pushTarget(target?: Watcher) {
  targetStack.push(target);
  Dep.target = target;
}


export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}


