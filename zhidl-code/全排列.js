/*
 * @author: zhidl
 * @Date: 2021-07-03 21:57:15
 * @description: 
 * @LastEditTime: 2021-07-04 01:12:37
 * @LastEditors: zhidl
 */
// @ts-nocheck

function permute1(nums) {
  let res = [];
  brea([]);
  return res;
  function brea(path = []) {
    if(path.length === nums.length) {
      res.push(path.join(''));
      return;
    }
    for(let i = 0; i < nums.length; i++) {
      if(path.includes(nums[i])) {
        continue;
      }
      brea(path.concat(nums[i]));
    }
  }
}

let a = permute1(['a', 'b', 'c', 'd']);

console.log(a, 'aaa');