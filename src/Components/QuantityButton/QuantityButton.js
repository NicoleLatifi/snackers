import React, { Component } from 'react';
import './QuantityButton.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: ''
    }
  }

  componentDidMount = () => {
    if (this.props.buttonType === "Decrease") {
      this.setState({ buttonText: "-" })
    } else {
      this.setState({ buttonText: "+"})
    }
  }

  handleClick = () => {
    if (this.props.buttonType === "Decrease") {
      this.props.decreaseRecurringQuantity(this.props.snackId)
      console.log("aaa")
    }
    if (this.props.buttonType === "Increase") {
      this.props.increaseRecurringQuantity(this.props.snackId)
      console.log("bbb")
    }
  }

  render() {
    return (
      <button aria-label={`${this.props.buttonType} quantity`} onClick={this.handleClick} >{this.state.buttonText}</button>
    )
  }
}

export default Button;