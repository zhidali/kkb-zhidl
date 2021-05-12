/*
 * @author: zhidl
 * @Date: 2021-05-11 18:26:18
 * @description: 
 * @LastEditTime: 2021-05-11 18:46:33
 * @LastEditors: zhidl
 */

interface Component {
  [k:string]: any
}

interface WatchOptions {
  immediate?: boolean;
  user?: boolean;
  [k:string]: any;
}