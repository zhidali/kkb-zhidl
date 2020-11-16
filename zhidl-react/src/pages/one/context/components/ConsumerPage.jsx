import React, { Component } from 'react';

import {ThemeConsumer} from '../context';

class ConsumerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        ConsumerPage
        <ThemeConsumer>
          {
            (themeContext) => {
              console.log(themeContext);
              return (
                <div>
                 consumer color: {themeContext.name}
                </div>
              )
            }
          }
        </ThemeConsumer>
      </div>
     );
  }
}
 
export default ConsumerPage;