import React, { Component } from 'react';

import store from './store/store';



class Redux extends Component {
	constructor(props) {
		super(props);
		this.state = {};
  }
  componentDidMount() {
    
    // 有订阅，一定得有取消订阅的操作
    this.unsubscribe = store.subscribe(() => {
      // 页面强制刷新
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe && this.unsubscribe();
  }
  add = () => {
    
    // store.dispatch({ type: 'ADD' })

    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({type: 'ADD'});
      }, 1000)
    })

  }

  minus = () => {
    store.dispatch(
      Promise.resolve({
        type:'MINUS'
      })
    )
  }
	render() {
		return (
			<div>
				<h2>redux</h2>
				<div>{store.getState().count}</div>
				<button onClick={this.add}>store + 1</button>
        <button onClick={this.minus}>store - 1</button>
			</div>
		);
	}
}

export default Redux;
