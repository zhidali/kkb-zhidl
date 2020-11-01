import React, { Component } from 'react';

import { createForm } from 'rc-form';

import Input from '../components/Input';

@createForm()
class MyRCForm extends Component {
	constructor(props) {
		super(props);
	}
	submit = () => {
		console.log('submit', this.props.form.getFieldsValue());
  };
  
  componentDidMount() {
    this.props.form.setFieldsValue({username: 'zhidl'})
  }
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<h2>MyRCForm</h2>
				{getFieldDecorator('username')(<Input placeholder="username" />)}
				{getFieldDecorator('password')(<Input placeholder="password" />)}

				<button onClick={this.submit}>submit</button>
			</div>
		);
	}
}

export default MyRCForm;
