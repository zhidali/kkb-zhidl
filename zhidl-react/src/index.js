// reac负责逻辑控制 数据 -》 vdom
import React from 'react';
// 负责渲染实际dom  vdom -> dom转换
import ReactDOM from 'react-dom';
import Index from './reactapi/index.jsx';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<div>
			<Index />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

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
