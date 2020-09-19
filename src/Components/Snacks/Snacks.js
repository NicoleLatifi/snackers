import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls'
import noImage from "../../Helpers/icons/snack.png"

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      allSnacksDetails: {},
      allSnacksIds: [],
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
                image: snackDetail.image ? snackDetail.image : noImage,
                recurringStatus: "not added",
                quantity: 0
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

  addSnack = (snackId) => {
    this.setState( prevState => ({ 
      allSnacksDetails: {
        ...prevState.allSnacksDetails,
        [snackId]: {
          ...prevState.allSnacksDetails[snackId],
          recurringStatus: "active",
          quantity: 1
        }
      }
    }))
  }

  decreaseRecurringQuantity = (snackId) => {
    if (this.state.allSnacksDetails[snackId].quantity > 1) {
      this.setState( prevState => ({
        allSnacksDetails: {
          ...prevState.allSnacksDetails,
          [snackId]: {
            ...prevState.allSnacksDetails[snackId],
            quantity: this.state.allSnacksDetails[snackId].quantity - 1,
          }
        }
      }))
    }
    if (this.state.allSnacksDetails[snackId].quantity === 1) {
      this.setState( prevState => ({
        allSnacksDetails: {
          ...prevState.allSnacksDetails,
          [snackId]: {
            ...prevState.allSnacksDetails[snackId],
            recurringStatus: "zeroed",
            quantity: this.state.allSnacksDetails[snackId].quantity - 1,
          }
        }
      }))
    }
  }

  increaseRecurringQuantity = (snackId) => {
    this.setState( prevState => ({
      allSnacksDetails: {
        ...prevState.allSnacksDetails,
        [snackId]: {
          ...prevState.allSnacksDetails[snackId],
          quantity: this.state.allSnacksDetails[snackId].quantity + 1,
        }
      }
    }))
  }

  render() {
    const { allSnacksDetails, allSnacksIds, recurringSnacks } = this.state;
    return (
      <>
        { Object.keys(allSnacksDetails).length === 10 &&
          <BrowseSnacks
          allSnacksDetails={allSnacksDetails}
          allSnacksIds={allSnacksIds}
          addSnack={this.addSnack}
          decreaseRecurringQuantity={this.decreaseRecurringQuantity}
          increaseRecurringQuantity={this.increaseRecurringQuantity}
        />
        }
      </>
    )
  }
}

export default Snacks;