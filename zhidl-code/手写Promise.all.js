/*
 * @author: zhidl
 * @Date: 2021-07-03 20:06:07
 * @description: 
 * @LastEditTime: 2021-07-03 20:35:38
 * @LastEditors: zhidl
 */

// @ts-ignore
let myAll = function(...proList) {
  let count = 0;
  let res = [];
  let len = proList.length;
  return new Promise(function(resolve, reject) {
    for(let i = 0; i < len; i++) {
      Promise.resolve(proList[i]).then(function (r) {
        ++count;
        res[i] = r;
        if(count === len) {
          resolve(res);
        }
      })
    }
  })
}
