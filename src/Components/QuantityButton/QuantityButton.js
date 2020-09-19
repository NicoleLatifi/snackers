import React, { Component } from 'react';
import './QuantityButton.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  handleClick = () => {
    if (this.props.buttonType === "Decrease") {
      this.props.decreaseRecurringQuantity(this.props.snackId)
    } else {
      this.props.increaseRecurringQuantity(this.props.snackId)
    }
  }

  render() {
    return (
      <button aria-label={`${this.props.buttonType} quantity`} onClick={this.handleClick} >{this.props.buttonText}</button>
    )
  }
}

export default Button;