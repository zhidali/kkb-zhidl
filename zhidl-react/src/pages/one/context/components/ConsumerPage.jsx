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
            (themeContext) => (
              <div>
                color: {themeContext.color}
              </div>
            )
          }
        </ThemeConsumer>
      </div>
     );
  }
}
 
export default ConsumerPage;