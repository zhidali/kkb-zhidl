import {
  createStore
} from 'redux';



// 定于state初始化 和修改规则, reducer是一个纯函数
function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;