import React, { Component } from 'react';
// 模块化样式
import style from './index.module.css';

// setState用法
import SetState from './SetState.jsx';
// this.props.children
import Children from './PropsChildren';
// redux
import Redux from './Redux';

// react-redux
import ReactRedux from './ReactRedux';
// react-router-dom
import ReactRouter from './ReactRouter';
// PureComponent
import PureCom from './PureCom';
// 生命周期 prop-types类型校验
import LifeCycle from './LifeCycle';;
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
	}
	click = (a) => {
		console.log(a, 222)
	}
  render() { 
    return ( <div className={style.app}>
			
			<SetState click={this.click} >
				div
			</SetState>

			
			
      {/* <Redux /> */}

      {/* <ReactRedux /> */}

			{/* <ReactRouter /> */}

			{/* <PureCom /> */}

			{/* <LifeCycle /> */}
		</div> );
  }
}
 
export default Index;







{/* <Children name="this.props.children">
	{
		{
			content: (
				<div>我是context传入过来的</div>
			),
			text: '我是text传入的文本',
			btnClick: () => {console.log('我是btnClick传入的事件')}
		}
	}
</Children> */}