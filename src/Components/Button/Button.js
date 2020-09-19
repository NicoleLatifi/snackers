import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: '',
    }
  }

  render() {
    return (
      <button>Add</button>
    )
  }
}

export default Button;