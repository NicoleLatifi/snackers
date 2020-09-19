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
    }
  }

  render() {
    return (
      <div className="quantity-buttons-container">
        <button aria-label="Decrease quantity" onClick={this.handleClick} >-</button>
        <span>{this.props.recurringSnacks[this.props.snackId].quantity}</span>
        <button aria-label="Decrease quantity" onClick={this.handleClick} >+</button>
      </div>
      )
  }
}

export default Button;