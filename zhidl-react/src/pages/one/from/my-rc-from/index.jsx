import React, { Component } from 'react';

export default function createForom(Cmp) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {};
			this.options = {};
		}
		handleChange = (e) => {
			const { name, value } = e.target;
			this.setState({
				[name]: value
			});
		};
		getFieldDecorator = (field, option) => (InputCmp) => {
			this.options[field] = option;
			return React.cloneElement(InputCmp, {
				name: field,
				value: this.state[field] || '',
				onChange: this.handleChange
			});
		};
		setFieldsValue = (newStore) => {
			this.setState(newStore);
		};
		getFieldsValue = () => {
			return this.state;
		};
		validateFields = (callback) => {
			// 实现校验
			// 规则 this.options
      // 校验值
      
      // 葡萄  zhidl
			let err = [];
			for (let field in this.options) {
				// 判断 state[field] 是否为undefind

				if (this.options[field].rules && this.options[field].rules.length) {
          
					if (this.options[field].rules[0].required) {

						if (this.state[field] === undefined || this.state[field] === '') {
              let errObj = {
                message: this.options[field].rules[0].message,
                name: field
              }
              err.push(errObj);
            }
					}
				}
			}

			if (err.length == 0) {
				callback(null, this.state);
			} else {
        callback(err, this.state);
			}
		};
		getForm = () => {
			return {
				form: {
					getFieldDecorator: this.getFieldDecorator,
					setFieldsValue: this.setFieldsValue,
					getFieldsValue: this.getFieldsValue,
					validateFields: this.validateFields
				}
			};
		};
		render() {
			return <Cmp {...this.props} {...this.getForm()} />;
		}
	};
}
