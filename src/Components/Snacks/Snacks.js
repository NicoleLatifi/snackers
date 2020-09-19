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
      recurringSnacks: {}, // {id: {quantity: 1, paused: false}}
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
                image: snackDetail.image ? snackDetail.image : noImage
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
      recurringSnacks: {
        ...prevState.recurringSnacks,
        [snackId]: {
          ...prevState.recurringSnacks[snackId],
          quantity: 1,
          paused: false
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
          recurringSnacks={recurringSnacks}
          addSnack={this.addSnack}
        />
        }
      </>
    )
  }
}

export default Snacks;