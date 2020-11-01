context 类似于 vue的 provide inject 

先创建context对象
step1 ./context.js
import React, {createContext} from 'react';
export const ThemeContext = createContext();
export const ThemeProvide = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

step2 
最外层需要使用 ThemeProvide 通过value向下传递
<ThemeProvide value={}>
  <ContextTypePage />
  <UseContextPage />
</ThemeProvide>

step3
子组件中需要使用 ThemeContext
static contextType = ThemeContext;





第一种使用方式：contextType 只能用在类组件当中 只能订阅单一的contextType
第二种使用方式：useContext() 只能用在函数组件和自定义hook中
第三种使用方式：ThemeConsumer， 可以用在函数组件和类组件中，也能订阅多个context中


context不建议使用
因为context消耗的性能很大， Provide嵌套很多子组件，传递时候都会进行更新 render(), 所以要慎用！


context 与 redux
context 是子孙组件 与 祖先组件跨层级传递数据
redux 更多的是数据共享，组件之间没有明显的层级关系， 可能是并列的





