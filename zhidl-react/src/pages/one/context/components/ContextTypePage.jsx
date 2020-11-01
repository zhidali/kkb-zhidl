import React, { Component } from 'react';

import { ThemeContext } from '../context';

class ContextTypePage extends Component {
	// contextType 不能改
	static contextType = ThemeContext;

	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { color } = this.context;

		return <div>ContextType color: {color}</div>;
	}
}

export default ContextTypePage;
