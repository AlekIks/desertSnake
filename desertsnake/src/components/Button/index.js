
import React from 'react';

import './index.css'

class Button extends React.Component {
  state = {
    isClicked: false,
    style: "button",
  }

  handleClick = (event) => {
      event.preventDefault()

      console.log('button clicked')

      // this.setState({isClicked: true})

      this.props.onClick(event)
  }

  render() {
    return (
      <button className={this.state.isClicked ? "red" : this.state.style} onClick={this.handleClick}>{this.props.children}</button>
    );
  }
}

export default Button;