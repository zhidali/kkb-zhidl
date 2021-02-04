import React, { Component } from 'react';
import HooksPage from './hooks/HooksPage';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h2>react 第三天课程 hooks和react-redux使用</h2>
        <HooksPage />
      </div>
     );
  }
}
 
export default Three;