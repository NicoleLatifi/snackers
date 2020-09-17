import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'

class Snack extends Component {
  constructor() {
    super();
    this.state = {
      allSnackDetails: [],
      allSnackIds: [],
      allSnackPrices: [],
      recurringSnacks: []
    }
  }

  render() {
    return (
      <BrowseSnacks />  
    ) 
  };
}

export default Snack;