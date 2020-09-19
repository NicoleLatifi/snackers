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
    if (this.props.buttonText === "Add") {
      this.props.addSnack(this.props.snackId)
    }
  }

  render() {
    return (
      <button aria-label={`${this.props.buttonText} snack`} onClick={this.handleAddClick} >{this.props.buttonText}</button>
    )
  }
}

export default Button;