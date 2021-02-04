export default function applyMiddleware(...middleWares) {

  return createStore => reducer => {
    const store = createStore(reducer);
    
    
    let dispatch = store.dispatch;
    // 加强dispatch

    const midApi = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    }

    const middlewareChain =  middleWares.map(middleware => middleware(midApi));

    // 重新赋值一个函数
    dispatch = compose(...middlewareChain)(store.dispatch);

    // 返回加强版 dispatch
    return {
      ...store,
      dispatch
    }

  }
}


function compose(...funcs) {
  if(funcs.length === 0){
    return (arg) => arg
  }

  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((a,b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}