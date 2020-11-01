import React, { Component } from 'react';
import Context from './context/index.jsx';
import Hoc from './hoc/index.jsx'
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
			</div>
		);
	}
}

export default One;
