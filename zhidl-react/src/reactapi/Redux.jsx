import React, { Component } from 'react';

import store from './redux/store';

class Redux extends Component {
	constructor(props) {
		super(props);
		this.state = {};
  }
  componentDidMount() {
    store.subscribe(() => {
      // 页面强制刷新
      this.forceUpdate();
    })
  }
	render() {
		return (
			<div>
				<h2>redux</h2>
				<div>{store.getState()}</div>
				<button onClick={() => store.dispatch({ type: 'ADD' })}>store + 1</button>
			</div>
		);
	}
}

export default Redux;
