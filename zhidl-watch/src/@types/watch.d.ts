/*
 * @author: zhidl
 * @Date: 2021-05-11 18:26:18
 * @description: 
 * @LastEditTime: 2021-05-19 10:28:40
 * @LastEditors: zhidl
 */

interface Component {
  [k:string]: any
}

interface WatchOptions {
  /** 是否深度监听 */
  deep?: boolean;
	/** 是否立即执行 */
  immediate?: boolean;
  [k:string]: any;
}