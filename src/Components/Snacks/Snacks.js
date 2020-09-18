import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import { getAllSnacksIds, getSnackDetail } from '../../Helpers/apiCalls'

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      allSnacksDetails: {},
      allSnacksIds: [],
      allSnacksPrices: [],
      recurringSnacks: [],
      error: '',
    }
  }

  async componentDidMount() {
    await getAllSnacksIds()
      .then(randomSnackIds => {
        this.setState({ allSnacksIds: randomSnackIds})
      })
    this.state.allSnacksIds.forEach(snackId => {
        getSnackDetail(snackId)  
          .then(snackDetail => {
            this.setState( prevState => ({ 
              allSnacksDetails: {
                ...prevState.allSnacksDetails,
                [snackId]: {
                  name: snackDetail.name,
                  brand: snackDetail.brand,
                  sizeValue: snackDetail.sizeValue,
                  sizeUnit: snackDetail.sizeUnit,
                  allergens: snackDetail.allergens,
                  ingredients: snackDetail.ingredients,
                  organic: snackDetail.organic,
                  image: snackDetail.image
              }
            }
          }))
        })
      })
  }

  render() {
    return (
      <BrowseSnacks />  
    ) 
  };
}

export default Snacks;