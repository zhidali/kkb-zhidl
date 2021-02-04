import React, { Component } from 'react';

import {Button} from 'antd';

// hoc 是个函数， 参数是组件，返回值也是组件

// 不要在render方法中使用hoc
// render会多次执行调用
const foo = (Cmp) => {
	return (props) => {
		return (
			<div>
				foo
				<Cmp {...props} />
			</div>
		);
	};
};

function Child(props) {
	return <div>child {props.name}</div>;
}

const Foo = foo(Child);

class Hoc extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
        <Button>hoc</Button>
				<h2>hoc</h2>
				<Child name="zhidl" />
				<Foo />
			</div>
		);
	}
}

export default Hoc;
