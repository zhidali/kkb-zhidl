import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ReactRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<h2>react router </h2>
				<Router>
					<Link to="/">首页</Link>
					<Link to="/user">用户中心</Link>

					
					{/* component children render是互斥的  children优先级更高 */}
					{/* children > component > render */}
          {/* children 除了不管loaction 是否匹配都会被渲染之外，其他工作与render一样 */}
          {/* render 只有当loaction匹配的时候渲染 */}
          {/* component 只有当loaction 匹配的时候渲染 */}

          <Switch>
            {/* exact 精确匹配 */}
            <Route
              exact
              path="/"
              component={HomePage}
              children={() => <div>children</div>}
              render={() => <div>render</div>}
            />
            {/* 用户中心页 */}
            <Route path="/user" component={UserPage} />
            {/* 404 设定一个没有path的路由在路由列表最后面,表示一定匹配 */}
            <Route component={EmptyPage}></Route>
          </Switch>
				</Router>
			</Fragment>
		);
	}
}

function HomePage() {
	return <div>home page</div>;
}

function UserPage() {
	return <div>user page</div>;
}

function EmptyPage() {
  return <div>404页面</div>;
}
export default ReactRouter;
