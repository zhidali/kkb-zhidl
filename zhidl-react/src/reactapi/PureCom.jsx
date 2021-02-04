import React, { Component, PureComponent } from 'react';

// PureComponent 是一个浅比较
// 区别就是 PureComponent 实现了对shouldComponentUpdate的浅比较
class PureCom extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
      count: 0,
      obj: {
        num: 0
      }
		};
	}
	setCount = () => {
		this.setState({
      count: 101,
      obj: {num: 1000}
		});
  };
  // 组件继承PureComponent的话就不需要 自己手动比较le 
  // shouldComponentUpdate(nextProps, nextState) {
  //   // 返回true 更新当前组件， 返回false不更新当前组件
  //   // 也就是不会触发render()渲染， setState回调都会正常执行
  //   return nextState.count !== this.state.count;
  // }
	render() {
    console.log('render');
		return (
			<div>
				<h2>PureComponent</h2>
				<button onClick={this.setCount}>{this.state.count}</button>
			</div>
		);
	}
}

export default PureCom;
