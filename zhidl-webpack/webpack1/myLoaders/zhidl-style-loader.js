/*
 * @author: zhidl
 * @Date: 2020-12-24 23:22:49
 * @description: 
 * @LastEditTime: 2020-12-24 23:30:24
 * @LastEditors: zhidl
 */

module.exports = function(source) {
  return `
    const tag = document.createElement('style');
    tag.innerHTML = ${source};
    document.head.appendChild(tag);
  `
}