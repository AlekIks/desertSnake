
import React from 'react';

import './index.css'

class Button extends React.Component {
  state = {
    isClicked: false,
  }

  handleClick = (event) => {
      event.preventDefault()

      console.log('button clicked')

      // this.setState({isClicked: true})

      this.props.onClick(event)
  }

  render() {
    return (
      <button class={this.props.style} 
        onClick={this.handleClick}
        disabled={this.props.disabled}>
          
          {this.props.children}
        </button>
    );
  }
}

export default Button;