import React, { Component } from 'react';
import './QuantityButton.css';
import PropTypes from 'prop-types';

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
      <button className="quantity-button" aria-label={`${this.props.buttonType} quantity`} onClick={this.handleClick} >{this.props.buttonText}</button>
    )
  }
}

export default QuantityButton

QuantityButton.propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  decreaseRecurringQuantity: PropTypes.func,
  increaseRecurringQuantity: PropTypes.func,
}