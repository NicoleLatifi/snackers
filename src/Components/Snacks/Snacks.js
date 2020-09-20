import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import RecurringSnacks from '../RecurringSnacks/RecurringSnacks'
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls'
import noImage from "../../Helpers/icons/snack.png"
import { Route, Switch } from 'react-router-dom';

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      allSnacksDetails: {},
      allSnacksIds: [],
      recurringSnacksIds: [],
      error: '',
    }
  }

  async componentDidMount() {
    await getAllSnacksIds()
      .then(randomSnackIds => {
        this.setState({ allSnacksIds: randomSnackIds})
    })
    this.state.allSnacksIds.forEach(async (snackId) => {
      await getSnackDetail(snackId)  
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
    this.state.allSnacksIds.forEach(async (snackId) => {
      await getSnackPrice(snackId)
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
    if (!this.state.recurringSnacksIds.includes(snackId)) {
      this.setState({recurringSnacksIds: [...this.state.recurringSnacksIds, snackId]})
    }
  }

  decreaseRecurringQuantity = (snackId, fromRecurringPage) => {
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
            quantity: 0,
          }
        }
      }))
      if (fromRecurringPage === false) {
        this.removeFromRecurring()
      }
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

  removeFromRecurring = (snackId) => {
    let recurringSnacksIdsCopy = [...this.state.recurringSnacksIds]
    const index = recurringSnacksIdsCopy.indexOf(snackId)
    recurringSnacksIdsCopy.splice(index, 1)
    this.setState({ recurringSnacksIds: recurringSnacksIdsCopy })
  }

  pauseRecurringSnack = (snackId) => {
    this.setState( prevState => ({ 
      allSnacksDetails: {
        ...prevState.allSnacksDetails,
        [snackId]: {
          ...prevState.allSnacksDetails[snackId],
          recurringStatus: "paused"
        }
      }
    }))
  }

  render() {
    const { allSnacksDetails, allSnacksIds, recurringSnacksIds } = this.state;
    return (
      <Switch>
        <Route 
          exact
          path='/'
          render={() => {
            return (            
              <BrowseSnacks
              allSnacksDetails={allSnacksDetails}
              allSnacksIds={allSnacksIds}
              addSnack={this.addSnack}
              decreaseRecurringQuantity={this.decreaseRecurringQuantity}
              increaseRecurringQuantity={this.increaseRecurringQuantity}
              />
            )
          }}
        />
        <Route
          path='/recurring-snacks'
          render={() => {
            return (
              <RecurringSnacks
                allSnacksDetails={allSnacksDetails}
                recurringSnacksIds={recurringSnacksIds}
                addSnack={this.addSnack}
                decreaseRecurringQuantity={this.decreaseRecurringQuantity}
                increaseRecurringQuantity={this.increaseRecurringQuantity}
                removeFromRecurring={this.removeFromRecurring}
                pauseRecurringSnack={this.pauseRecurringSnack}
              />
            )
          }}
        />
      </Switch>
    )
  }
}

export default Snacks;