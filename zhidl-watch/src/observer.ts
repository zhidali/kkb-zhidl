/*
 * @author: zhidl
 * @Date: 2021-05-11 18:39:23
 * @description: 
 * @LastEditTime: 2021-05-12 10:16:56
 * @LastEditors: zhidl
 */
import Dep from './dep';
import { arrayMethods } from './array';
import { def, hasOwn, isObject, hasProto, isPlainObject } from './util';

// 获取数组原型方法
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

export class Observer {
	value: any;
	dep: Dep;
	constructor(value: any) {
		this.value = value;
		this.dep = new Dep();
		def(value, '__ob__', this);
		if (Array.isArray(value)) {
			if (hasProto) {
				protoAugment(value, arrayKeys);
			} else {
				copyAugment(value, arrayMethods, arrayKeys);
			}
      this.observeArray(value);
		} else {
      this.walk(value);
		}
	}
	walk(obj) {
		const keys = Object.keys(obj);
		for (let i = 0; i < keys.length; i++) {
			defineReactive(obj, keys[i]);
		}
	}

	observeArray(items: Array<any>) {
		for (let i = 0, l = items.length; i < l; i++) {
			observe(items[i]);
		}
	}
}

function protoAugment(target, src: Object) {
	target.__proto__ = src;
}

function copyAugment(target: Object, src: Object, keys: Array<string>) {
	for (let i = 0, l = keys.length; i < l; i++) {
		const key = keys[i];
		def(target, key, src[key]);
	}
}


export function observe(value:any): Observer | void{
  if(!isObject(value)) {
    return
  }
  let ob:Observer | void;
  if(hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if(
    // 判断数组 或者 是对象
    (Array.isArray(value) || isPlainObject(value)) &&
    // 判断是对象是否可扩展
    Object.isExtensible(value)
  ) {
    ob = new Observer(value)
  }
  return ob;
}


function defineReactive(obj:Object, key: string, val?: any) {
  const dep = new Dep();

  // 获取当前key的属性设置
  // configurable: true 是否可配置 删除
  // enumerable: true 是否可枚举 
  // value: 1
  // writable: true 是否可修改
  const property = Object.getOwnPropertyDescriptor(obj, key);

  if(property && property.configurable === false) {
    return;
  }
  const getter = property && property.get;
  const setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = observe(val);

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      const value = getter ? getter.call(obj) : val;
      if(Dep.target) {
        dep.depend();
        if(childOb) {
          childOb.dep.depend();
          if(Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set(newVal) {
      const value = getter ? getter.call(obj) : val;

      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      if (getter && !setter) return;

      if(setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal;
      }

      childOb = observe(newVal);
      dep.notify();
    }
  })
}


function dependArray (value: Array<any>) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i]
    e && e.__ob__ && e.__ob__.dep.depend()
    if (Array.isArray(e)) {
      dependArray(e)
    }
  }
}