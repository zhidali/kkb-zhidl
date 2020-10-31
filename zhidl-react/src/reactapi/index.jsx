import React, { Component } from 'react';
// 模块化样式
import style from './index.module.css';
import SetState from './SetState.jsx';

import Children from './PropsChildren';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div className={style.app}>
			<SetState />

			<Children name="this.props.children">
				{/* <div>
					子元素s
				</div> */}
				
				{/* 具名插槽 */}
				{
					{
						content: (
							<div>我是context传入过来的</div>
						),
						text: '我是text传入的文本',
						btnClick: () => {console.log('我是btnClick传入的事件')}
					}
				}
			</Children>
			
		</div> );
  }
}
 
export default Index;