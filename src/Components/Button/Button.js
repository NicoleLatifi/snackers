import React, { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick = () => {
    const { snackId, buttonText, addSnack, removeFromRecurring, pauseRecurringSnack } = this.props
    if (buttonText === "Add") {
      addSnack(snackId)
    } else if (buttonText === "Reactivate") {
      addSnack(snackId)
    } else if (buttonText === "Remove") {
      removeFromRecurring(snackId)
    } else if (buttonText === "Pause") {
      pauseRecurringSnack(snackId)
    }
  }

  render() {
    return (
      <button className="standard-button" aria-label={`${this.props.buttonText} snack`} onClick={this.handleClick} >{this.props.buttonText}</button>
    )
  }
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  addSnack: PropTypes.func,
  removeFromRecurring: PropTypes.func,
  pauseRecurringSnack: PropTypes.func,
}