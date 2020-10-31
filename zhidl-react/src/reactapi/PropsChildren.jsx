import React, { Component } from 'react';
class Children extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
    let {children} = this.props;
		return (
			<div>
        {/* 渲染父组件传入的 属性 */}
				<h2>{this.props.name}</h2>
        {/* 渲染父级传入元素 类似vue的 slot */}
				{/* {children} */}
        
        {children.content}
        {children.text}
        <button onClick={children.btnClick}>btnClick</button>
			</div>
		);
	}
}

export default Children;
