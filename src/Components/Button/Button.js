import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: '',
    }
  }

  handleAddClick = () => {
    this.props.addSnack(this.props.snackId)
  }

  render() {
    return (
      <button aria-lable="Add snack" onClick={this.handleClick} >Add</button>
    )
  }
}

export default Button;