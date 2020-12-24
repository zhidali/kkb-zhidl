/*
 * @author: zhidl
 * @Date: 2020-12-24 22:41:59
 * @description: 
 * @LastEditTime: 2020-12-24 23:08:37
 * @LastEditors: zhidl
 */

 // loader 本质上是一个函数

 //! 不可以是箭头函数

 module.exports = function(source) {
  console.log(this.query, source);
  const callback = this.async();
  setTimeout(() => {
    
   callback(null, msg);
  }, 2000)
  return source;
}