import React, { Component } from 'react';
import ConsumerPage from './components/ConsumerPage';
import ContextTypePage from './components/ContextTypePage';
import UseContextPage from './components/UseContextPage';

import { ThemeContext, ThemeProvide, ThemeConsumer } from './context';

class Context extends Component {
	constructor(props) {
		super(props);
		this.state = {
      theme: {
        color: 'red'
      },
      user: {
        name: '小明'
      }
    };
	}
	render() {
    const {theme} = this.state;
		return (
			<div>
        <h2>context</h2>  
        {/* ThemeProvide value向下传递 子组件中可以使用 this.context */}
        <ThemeProvide value={theme}>

          <ContextTypePage />
          <UseContextPage />
          <ConsumerPage />
          
        </ThemeProvide>
			</div>
		);
	}
}

export default Context;
