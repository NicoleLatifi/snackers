import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick = () => {
    const { snackId, buttonText, addSnack, removeFromRecurring } = this.props
    if (buttonText === "Add") {
      addSnack(this.props.snackId)
    } else if (buttonText === "Reactivate") {

    } else if (buttonText === "Remove") {
      removeFromRecurring(snackId)
    } else if (buttonText === "Pause") {

    }
  }

  render() {
    return (
      <button aria-label={`${this.props.buttonText} snack`} onClick={this.handleClick} >{this.props.buttonText}</button>
    )
  }
}

export default Button;