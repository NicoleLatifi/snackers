import React, { Component } from 'react';
import './Snacks.css';
import BrowseSnacks from '../BrowseSnacks/BrowseSnacks'
import RecurringSnacks from '../RecurringSnacks/RecurringSnacks'
import Error from '../Error/Error'
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls'
import noImage from "../../Helpers/icons/snack.png"
import { Switch, Route, Redirect } from 'react-router-dom'
import { addRecurringId, removeRecurringId } from '../../Actions/index'
import { connect } from 'react-redux'

class Snacks extends Component {
  constructor() {
    super();
    this.state = {
      allSnacksDetails: {},
      allSnacksIds: [],
      // recurringSnacksIds: [],
      error: "",
      totalPrice: 0,
    }
  }

  async componentDidMount() {
    await getAllSnacksIds()
      .then(data => {
        if (data.hasOwnProperty("error")) {
          throw new Error(data.error);
        } else {
          this.setState({ allSnacksIds: data})
        }
      })
      .catch(async (error) => {await this.setState({ error: error })})

    this.state.allSnacksIds.forEach(async (snackId) => {
      await getSnackDetail(snackId)  
        .then(data => {
          if (data.hasOwnProperty("error")) {
            throw new Error(data.error)
          } else {
            this.setState( prevState => ({ 
              allSnacksDetails: {
                ...prevState.allSnacksDetails,
                [snackId]: {
                  name: data.name,
                  brand: data.brand,
                  sizeValue: data.sizeValue,
                  sizeUnit: data.sizeUnit,
                  allergens: data.allergens,
                  ingredients: data.ingredients,
                  organic: data.organic,
                  image: data.image ? data.image : noImage,
                  recurringStatus: "not added",
                  quantity: 0
                }
              }
            }))
          }
        })
        .catch(async (error) => {await this.setState({ error: error })})
    })

    this.state.allSnacksIds.forEach(async (snackId) => {
      await getSnackPrice(snackId)
        .then(data => {
          if (data.hasOwnProperty("error")) {
            throw new Error(data.error)

          } else {
            this.setState( prevState => ({ 
              allSnacksDetails: {
                ...prevState.allSnacksDetails,
                [snackId]: {
                  ...prevState.allSnacksDetails[snackId],
                  price: data.toFixed(2)
                }
              }
            }))
          }
        })
        .catch(async (error) => {await this.setState({ error: error })})
    })
  }

  addSnack = async (snackId) => {
    let allSnacksDetails = Object.assign({}, this.state.allSnacksDetails)

    allSnacksDetails[snackId].recurringStatus = "active"
    allSnacksDetails[snackId].quantity = 1
    
    this.setState({ allSnacksDetails })

    this.props.addRecurringId(snackId) // first implementation of Redux

    this.calculateTotalPrice()
    console.log(typeof(this.state.totalPrice))
  }

  decreaseRecurringQuantity = async (snackId, fromRecurringPage) => {
    if (this.state.allSnacksDetails[snackId].quantity > 1) {
      await this.setState( prevState => ({
        allSnacksDetails: {
          ...prevState.allSnacksDetails,
          [snackId]: {
            ...prevState.allSnacksDetails[snackId],
            quantity: this.state.allSnacksDetails[snackId].quantity - 1,
          }
        }
      }))
    } else if (this.state.allSnacksDetails[snackId].quantity === 1) {
      // await this.setState( prevState => ({
      //   allSnacksDetails: {
      //     ...prevState.allSnacksDetails,
      //     [snackId]: {
      //       ...prevState.allSnacksDetails[snackId],
      //       recurringStatus: "zeroed",
      //       quantity: 0,
      //     }
      //   }
      // }))
      // if (fromRecurringPage === false) {
      //   this.removeFromRecurring()
      // }
      if (!fromRecurringPage === true) {
        this.removeFromRecurring(snackId)
      }
    }
    this.calculateTotalPrice()
  }

  increaseRecurringQuantity = async (snackId) => {
    await this.setState( prevState => ({
      allSnacksDetails: {
        ...prevState.allSnacksDetails,
        [snackId]: {
          ...prevState.allSnacksDetails[snackId],
          quantity: this.state.allSnacksDetails[snackId].quantity + 1,
        }
      }
    }))
    this.calculateTotalPrice()
  }

  removeFromRecurring = (snackId) => {
    this.props.removeRecurringId(snackId)
    this.calculateTotalPrice()
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

  calculateTotalPrice = () => {
    const newTotalPrice = this.props.recurringSnacksIds.reduce((total, recurringSnackId) => {
      const recurringSnacksDetails = this.state.allSnacksDetails[recurringSnackId]
      const recurringSnackPrice = recurringSnacksDetails.price * recurringSnacksDetails.quantity
      total = parseFloat(total) + parseFloat(recurringSnackPrice)
      total = total.toFixed(2)
      return total
    }, 0)
    this.setState({ totalPrice: newTotalPrice })
  }

  render() {
    const { allSnacksDetails, allSnacksIds, totalPrice, error } = this.state;
    return (
      <Switch>
        <Route exact path='/'>
          {error ? <Redirect to="/error" /> : 
          <BrowseSnacks
          allSnacksDetails={allSnacksDetails}
          allSnacksIds={allSnacksIds}
          addSnack={this.addSnack}
          decreaseRecurringQuantity={this.decreaseRecurringQuantity}
          increaseRecurringQuantity={this.increaseRecurringQuantity}
          />}
        </Route>
        <Route path='/recurring-snacks'>
          <RecurringSnacks
          allSnacksDetails={allSnacksDetails}
          totalPrice={totalPrice}
          addSnack={this.addSnack}
          decreaseRecurringQuantity={this.decreaseRecurringQuantity}
          increaseRecurringQuantity={this.increaseRecurringQuantity}
          removeFromRecurring={this.removeFromRecurring}
          pauseRecurringSnack={this.pauseRecurringSnack}
          />
        </Route>
        <Route path='/error'>
          <Error />
        </Route>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  recurringSnacksIds: state.recurringSnacksIds
});

const mapDispatchToProps = dispatch => ({
  addRecurringId: (snackId) => dispatch( addRecurringId(snackId) ),
  removeRecurringId: (snackId) => dispatch( removeRecurringId(snackId) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Snacks)