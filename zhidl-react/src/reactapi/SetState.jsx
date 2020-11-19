import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			num1: 1
		};
	}

	click2 = (a) => {
		// setTimeout(() => {

		// }, 1000)
		this.setNum(a);
	};

	setNum(a) {
		// this.setState((state) => ({ num: state.num + a }));

		this.setState({
			num: this.state.num + a
		})
		
	}
	render() {
		console.log('render');
		let { num, num1 } = this.state;
		return (
			<div onClick={() => this.click2(1)}>
				app
				<div>{num}</div>
				<div>{num1}</div>
			</div>
		);
	}
}

export default App;

// export default function FuncApp(props) {
// 	console.log(props);

// 	let aClick = (a) => {
// 		props.click(a);
// 	}
// 	return (
// 		<div onClick={() => aClick('aaa')}>1111</div>
// 	)
// };
