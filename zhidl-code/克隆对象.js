/*
 * @author: zhidl
 * @Date: 2021-07-03 23:30:22
 * @description: 
 * @LastEditTime: 2021-07-04 00:01:30
 * @LastEditors: zhidl
 */


const _toString = Object.prototype.toString
function getType(obj) {
  return _toString.call(obj).slice(8, -1)
}

// 深度优先克隆对象
function deepCopy(obj, vistied = new Set()) {
  let res  = {};
  if(getType(obj) === 'Object' || getType(obj) === 'Array') {
    if(vistied.has(obj)) {
      res = obj
    } else {
      vistied.add(obj);
      res = getType(obj) === 'Object' ? {} : [];
      Object.keys(obj).forEach( k => {
        res[k] = deepCopy(obj[k], vistied);
      })
    }
  } else if(typeof obj === 'function') {
    res = eval(`${obj.toString()}`)
  } else {
    res = obj
  }
  
  return res;
}




