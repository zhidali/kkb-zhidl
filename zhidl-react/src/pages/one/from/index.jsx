import React, { Component } from 'react';
import MyRCForm from './MyRCFrom';
// import MyRCFieldForm from './MyRCFieldForm.jsx';

class From extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h2>from</h2>
        {/* <MyRCFieldForm /> */}
        <MyRCForm />
      </div>
     );
  }
}
 
export default From;