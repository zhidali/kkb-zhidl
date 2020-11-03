export default function combineReducers(reducers) {

  // createStore reducer函数
  return function combination(state = {}, action) {
    // 存储下一次state
    let nextState = {};
    // 初始化 
    let hasChanged = false;
    for(let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChanged = hasChanged || nextState[key] !== state[key];
    }
    // 暗号：橘子  zhidl
    hasChanged = hasChanged || Object.keys(reducers).length !== Object.keys(state).length;

    return hasChanged ? nextState : state;
  }
}