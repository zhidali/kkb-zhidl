import React, { Component } from 'react';

import './store/arrReduce';
import ReduxPage from './ReduxPage';
class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h2>react 第二天课程  redux</h2>
        <ReduxPage />
      </div>
     );
  }
}
 
export default Two;