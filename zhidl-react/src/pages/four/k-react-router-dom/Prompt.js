import React, {Component} from 'react';

import { RouterContext } from './RouterContext';



export default function Prompt({message, when = true}) {
  return (
    <RouterContext.Consumer>
      {
        context => {
          if(!when) {
            return null
          }

          let method = context.history.block;
          // 暗号：荔枝 zhidl
          return (
            <LifeCycle 
            onMount={self => {
              self.release = method(message)
            }}

            onUnmount={self => {
              self.release();
            }}
            />
          )
        }
      }
    </RouterContext.Consumer>
  )
}




class LifeCycle extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      console.log(this, 'LifeCycle');
      this.props.onMount.call(this, this);
    }
  }
  componentWillUnmount() {
    if(this.props.onUnmount){
      this.props.onUnmount.call(null, this);
    }
  }
  render() {
    
    return null;
  }
}
