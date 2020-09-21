import React, { Component } from 'react';
import './QuantityButton.css';

class QuantityButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  handleClick = () => {
    const { buttonType, snackId, fromRecurringPage, decreaseRecurringQuantity, increaseRecurringQuantity} = this.props
    if (buttonType === "Decrease") {
      decreaseRecurringQuantity(snackId, fromRecurringPage)
    } else {
      increaseRecurringQuantity(snackId)
    } 
  }

  render() {
    return (
      <button aria-label={`${this.props.buttonType} quantity`} onClick={this.handleClick} >{this.props.buttonText}</button>
    )
  }
}

export default QuantityButton;