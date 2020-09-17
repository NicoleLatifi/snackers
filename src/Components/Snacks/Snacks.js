import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import { getAllSnacks } from '../../Helpers/apiCalls'

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      // allSnackDetails: [],
      allSnackIds: [],
      allSnackPrices: [],
      recurringSnacks: [],
      error: '',
    }
  }

  componentDidMount() {
    getAllSnacks()
      .then(randomSnackIds => {
        this.setState({ allSnackIds: randomSnackIds })
      })
   
    // getAllSnacks()
    //   .then((snacks) => {
    //     const fetchedSnackIds = snacks.map((snack) => {
    //       return snack.products.sku
    //     })
    //     this.setState({ allSnackIds: fetchedSnackIds, error: '' });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: "We're sorry, something went wrong. Please try again." });
    //   });
  }

  render() {
    return (
      <BrowseSnacks />  
    ) 
  };
}

export default Snacks;