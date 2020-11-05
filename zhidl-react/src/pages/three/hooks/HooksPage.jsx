import React, { useState, useEffect,useReducer, useLayoutEffect } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'

import {counterReducer} from '../../two/store/store'

// 处理第二个参数， 
const initArg = (init) => init - 0;

export default function HooksPage(props) {
  console.log(props);

  // 
  const count = useSelector(({count}) => count);


  // const [state, dispatch] = useReducer(counterReducer, '0', initArg);

  // useEffect 有延迟
  useEffect(() => {
      // componentDidMount
      console.log('useEffect');
      return () => {
        // componentWillUnmount
      }
  }, [])

  // 同步dom渲染
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect');
  //   return () => {

  //   }
  // }, [])

  const dis = useDispatch();

  const add = () => {
    dis({type: 'ADD'})
  }
  return (
    <div>
      {/* {state}
      <button onClick={() => dispatch({type: "ADD"})}>add</button> */}

      {count}
      <button onClick={add}>count + 1</button>
    </div>
  )
}


// export default connect(
//   // mapStateToProps 把state映射到props上
//   state => {
//     return ({
//       num: state
//     })
//   },
//   // mapDispatchProps 把dispatch映射到props上
//   // {
//   //   add: () => ({type: 'ADD'})
//   // }
//   dispatch => {
//     let creators = {
//       add: () => ({type: "ADD"}),
//       minus: () => ({type: "MINUS"})
//     }

//     creators = bindActionCreators(creators, dispatch);

//     return {dispatch, ...creators}

//   }
// )(HooksPage);