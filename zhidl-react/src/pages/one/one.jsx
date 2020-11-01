import React, { Component } from 'react';
import Context from './context/index.jsx';
import Hoc from './hoc/index.jsx'
import From from './from/index.jsx';
class One extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
        <Context />
				<Hoc />
				<From />
			</div>
		);
	}
}

export default One;
