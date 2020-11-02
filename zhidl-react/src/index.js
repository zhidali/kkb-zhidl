// reac负责逻辑控制 数据 -》 vdom
import React from 'react';
// 负责渲染实际dom  vdom -> dom转换
import ReactDOM from 'react-dom';
import Index from './reactapi/index.jsx';

// Context
// import One from './pages/one/one.jsx'
import Two from './pages/two/Two.jsx';
// 安装antd yarn add antd
// 按需加载 antd
// yarn add react-app-rewired babel-plugin-import customize-cra 
import 'antd/dist/antd.css';
import Button from 'antd/es/button'
import './index.less';
import { Provider } from 'react-redux';
import store from './reactapi/react-redux/store';

import reportWebVitals from './reportWebVitals';

function renderPage() {
	ReactDOM.render(
		<Provider store={store}>
				{/* <React.StrictMode>
			</React.StrictMode> */}
			<div>
					{/* <Button type="default">1111</Button> */}

					{/* <Index /> */}

					{/* <One /> */}

					<Two />
			</div>
		</Provider>
		,
		document.getElementById('root')
	);
}
renderPage();

// jsx 基本使用 表达式用{}包裹 表达式为以下：
// 函数
// jsx对象
// 条件语句
// 数组
// 属性
// 模块化

// react diff时候，首先比较type也就是标签类型，然后是key，所以同登同类型。key值必须是唯一的

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
