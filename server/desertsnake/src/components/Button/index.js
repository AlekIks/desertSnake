
import React from 'react';

import './index.css'

class Button extends React.Component {
  state = {
    isClicked: false,
  }


  render() {
    return (
      <button className={this.props.style} 
        onClick={this.props.handleClick}
        disabled={this.props.disabled}>
          
          {this.props.children}
        </button>
    );
  }
}

export default Button;