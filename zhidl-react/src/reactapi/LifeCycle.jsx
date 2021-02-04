import React, { Component } from 'react';
import PropTypes from 'prop-types';

// react17中将要废弃的 生命周期
// componentWillMount
// componentWillUpdate
// componentWillReceiveProps
class LifeCycle extends Component {
	// 默认props
	static defaultProps = {
		msg: 'omg'
	};
	// 定义props类型
	static propTypes = {
		// isRequired 必传
		msg: PropTypes.string.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
      count: 0,
      num: 100
		};
	}
	setCount = () => {
		this.setState((state) => {
			return {
				count: state.count + 1
			};
		});
  };
  // getDerivedStateFromProps 会在调用render 方法之前调用，
  // 并且在初始化挂载和后续更新的时候，它都会返回一个对象来更新state，返回null 则不更新任何内容
  static getDerivedStateFromProps(nextProps, prevState) {
    const {count} = prevState;
    return count > 5 ? {count: 0} : {count}
    // return null;
    // const {} = 
  }

	//警告！在React v17中不推荐使用。请改用componentDidMount。
	// componentWillMount() {}
	componentDidMount() {}
	// 是否要更新组件
	shouldComponentUpdate(nextProps, nextState) {
		return true;
  }
  // 在render之后，componentDidUpdate之前调用
  // 此函数的返回值将传递给componentDidUpdate 
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

	//警告！在React v17中不推荐使用。请改用componentDidUpdate。
	// componentWillUpdate(nextProps, nextState) {}
	// 更新之后
	componentDidUpdate(prevProps, prevState, snapshot) {}

  //警告！在React v17中不推荐使用。改用新的生命周期静态getDerivedStateFromProps。
  // 初次渲染的时候不会执行，只有在已挂载的组件接受新的props的时候，才会执行
	// componentWillReceiveProps(nextProps) {}
	render() {
		const { msg } = this.props;
    const { count } = this.state;
    console.log(this.state);
		return (
			<div>
				<h2>生命周期</h2>
				<div onClick={this.setCount}>count: {count}</div>
        
			</div>
		);
	}
}

export default LifeCycle;
