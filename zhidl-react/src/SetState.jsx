import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'setState 介绍',
			num: 0
		};
	}

	add = (v) => {
		// setState 在合成事件中 和 生命周期中是异步的，这里说的异步其实就是批量更新，达到了优化性能的目的
		// this.setState({
		// 	num: this.state.num + v
		// });

    // setState在setTimeout中是同步的
		// setTimeout(() => {
		// 	this.setState({
		// 		num: this.state.num + v
    //   });
    //   console.log(this.state.num);
    // }, 0);
    

    // this.setState({
    //   num: this.state.num + v
    // });
    // console.log(this.state.num);


    // this.state传入函数
    this.setState((state) => {
      return {
        num: state.num + v
      }
    }, () => {
      console.log(this.state.num)
    });

	};

	// 组件挂载之后执行
	componentDidMount() {
    // setState在原生事件中是同步的
    document.getElementById('text').addEventListener('click', 
    () => {
      this.add(1);
    });
  }
	// 组件卸载之前执行
	componentWillUnmount() {}
	render() {
		return <div id="text">{this.state.text}</div>;
	}
}

export default App;
