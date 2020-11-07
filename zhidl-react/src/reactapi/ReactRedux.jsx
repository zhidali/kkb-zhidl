import React, { Component } from 'react';
// 高阶组件
import { connect } from 'react-redux'

class ReactRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h2>react-redux</h2>

        <div>
        store: {this.props.num}
        </div>
        {/* <button onClick={() => this.props.dispatch({type: "ADD"})}>store + 1</button> */}
        <button onClick={() => this.props.add()}>store + 1</button>
      </div>
     );
  }
}
 
export default connect(
  // mapStateToProps 把state映射到props上
  state => {
    return ({
      num: state.count
    })
  },
  // mapDispatchProps 把dispatch映射到props上
  {
    add: () => ({type: 'ADD'})
  }
)(ReactRedux);