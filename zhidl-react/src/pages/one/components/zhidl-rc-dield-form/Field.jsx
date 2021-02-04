import React, { Component } from 'react';
import FieldContext from './FieldContext.jsx'

class Field extends Component {
  static contextType = FieldContext;
	constructor(props) {
		super(props);
		this.state = {};
  }
  
  componentDidMount() {
    this.context.registerEntity(this)
  }

  onStoreChange = () => {
    this.forceUpdate();
  };
  
	getCntrolled = () => {
    const {getFieldValue, setFieldValue} = this.context;
    const { name } = this.props;
		return {
      // 从formStore当中读取数据
			value: getFieldValue(name),
			onChange: (e) => {
        const newValue = e.target.value;
        setFieldValue({
          [name]: newValue
        });
        console.log(newValue, 'newValue');
      }
		};
	};
	render() {
    const { children } = this.props;

    // React.cloneElement(
    //     element,
    //     [props],
    //     [...children]
    // )
    // 克隆原来的元素，返回一个新的 React 元素；
    // 保留原始元素的 props，同时可以添加新的 props，两者进行浅合并；
    // key 和 ref 会被保留，因为它们本身也是 props ，所以也可以修改；
    // 根据 react 的源码，我们可以从第三个参数开始定义任意多的子元素，如果定义了新的 children ，会替换原来的 children ；

		return React.cloneElement(children, this.getCntrolled());

		// return (children);
	}
}

export default Field;
