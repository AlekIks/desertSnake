
import React from 'react';

import './index.css'

class Column extends React.Component {
  render() {
    return (
      <div class="column">
          <h1> {this.props.label}</h1>
          <a href={this.props.href1}>{this.props.name1}</a>
          <a href={this.props.href2}>{this.props.name2}</a>
          <a href={this.props.href3}>{this.props.name3}</a>
        </div>
    );
  }
}

export default Button;