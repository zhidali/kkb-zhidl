
export default function createStore(reducer, enhancer) {
  if(enhancer){
    // enhancer 是用于加强 store.dispatch 
    return enhancer(createStore)(reducer)
  }

  // store state
  let currentState;
  // 监听函数数组
  let currentListeners =  [];

  // 获取状态
  function getState() {
    return currentState;
  }


  // 修改状态
  function dispatch(action) {
    currentState = reducer(currentState, action);

    // 执行监听
    currentListeners.forEach(listener => listener());
    
  }

  // 订阅监听
  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      currentListeners = [];
    }
  }

  // 手动执行dispatch 初始值
  dispatch({type: 'REDUX_DEFAULT'})

  return {
    getState,
    dispatch,
    subscribe
  }

}