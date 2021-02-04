// reducer 是一个纯函数，接受旧的state 和 action， 返回新的state
// 起名字来自于 Array.prototype.reduce

// const arr =  [1,2,3,4];
// arr.reduce((num1, num2) => {
//   console.log(num1, num2);
//   return num1 + num2
// })

function a1() {
  console.log('a1');
}

function a2() {
  console.log('a2');
}

function a3() {
  console.log('a3');
}
// 洋葱 不利于维护
// a1(a2(a3()))


let res = compose(a1)('omg');
console.log(res);
// 返回一个函数
function compose(...funcs) {
  if(funcs.length === 0){
    return (arg) => arg
  }

  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}

export default {}