/*
 * @author: zhidl
 * @Date: 2021-07-03 19:53:43
 * @description: 
 * @LastEditTime: 2021-07-03 20:05:25
 * @LastEditors: zhidl
 */


// 防抖函数
// 在事件被触发n秒后再执行回调
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let _this = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(_this, args)
    }, delay)
  }
}



// 函数节流
// 每隔一段时间，只执行一次函数。
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    let _this = this;
    if(timer !== null) return;
    timer = setTimeout(function() {
      fn.apply(_this, args);
      timer = null;
    }, delay)
  }
}

function throttle1(fn, delay) {
  let previous = 0;
  return function(...args) {
    let _this = this;
    let now = Date.now();
    if(now - previous > delay) {
      fn.apply(_this, args);
      previous = now;
    }
  }
}

