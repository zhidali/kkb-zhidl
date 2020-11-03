// import {
//   createStore,
//   applyMiddleware,
//   combineReducers
// } from 'redux';
// redux-thunk 异步解决方案
// redux-logger 打印日志
// redux-promise
// import thunk from 'redux-thunk'; 
// import logger from 'redux-logger'; 

import promise from 'redux-promise'; 

import isPromise from 'is-promise';

import {
  createStore,
  applyMiddleware,
  combineReducers
} from './kredux';

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

const store = createStore(
  // counterReducer, 
  combineReducers({
    count: counterReducer
  }),
  applyMiddleware(thunk, logger, promise),

  );




export default store;

function logger({dispatch, getState}) {
  return next => action => {
    // 上一次的state
    console.log('action.type', action.type);
    const prveState = getState();
    console.log('prevState', prveState);
    const returnValue = next(action);
    
    const nextState = getState();
    console.log('nextState', nextState);

    return returnValue;
  }
}


function thunk({dispatch, getState}) {
  return next => action => {
    // action 
    if(typeof action === 'function'){
      return action(dispatch, getState);
    }
    return next(action);
  }
}