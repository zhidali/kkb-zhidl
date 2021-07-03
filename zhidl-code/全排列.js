/*
 * @author: zhidl
 * @Date: 2021-07-03 21:57:15
 * @description: 
 * @LastEditTime: 2021-07-03 22:10:18
 * @LastEditors: zhidl
 */
// @ts-nocheck

function permute(nums) {
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

function permute1(nums) {
  let res = [];

  let str = '';

  return res;
}


let a = permute(['a', 'b', 'c', 'd']);

console.log(a, 'aaa');