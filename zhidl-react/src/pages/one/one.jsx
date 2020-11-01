import React, { Component } from 'react';
import Context from './context/index.jsx';

class One extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
        <Context />
			</div>
		);
	}
}

export default One;
