import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls'

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      allSnacksDetails: {},
      allSnacksIds: [],
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
    this.state.allSnacksIds.forEach(snackId => {
      getSnackPrice(snackId)
        .then(snackPrice => {
          this.setState( prevState => ({ 
            allSnacksDetails: {
              ...prevState.allSnacksDetails,
              [snackId]: {
                ...prevState.allSnacksDetails[snackId],
                price: snackPrice
              }
            }
        }))
      })
    })
  }

  render() {
    const { allSnacksDetails, allSnacksIds } = this.state;
    return (
      <BrowseSnacks
        allSnacksDetails={allSnacksDetails}
        allSnacksIds={allSnacksIds}
      />
    )
  }
}

export default Snacks;