import React, { Component } from 'react';

// import { createForm } from 'rc-form';

import createForm from './my-rc-from/index.jsx';

import Input from '../components/Input';

const nameRules = { required: true, message: '请输入姓名！' };
const passworRules = { required: true, message: '请输入密码！' };

@createForm
class MyRCForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	submit = () => {

		const {getFieldsValue, validateFields} = this.props.form;

		validateFields((err, val) => {
			console.log(err, val);
		})
	};
	// valueDateFields
	componentDidMount() {
		this.props.form.setFieldsValue({ username: 'zhidl' });
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const { username, password } = this.state;
		return (
			<div>
				<h2>MyRCForm</h2>
				{getFieldDecorator('username', {
					rules: [ nameRules ]
				})(<Input placeholder="username" />)}

				{getFieldDecorator('password', {
					rules: [passworRules]
				})(<Input placeholder="password" />)}

				<button onClick={this.submit}>submit</button>
			</div>
		);
	}
}

export default MyRCForm;
