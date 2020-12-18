import { combineReducers } from 'redux'
import { allSnacksDetails } from './allSnacksDetails'
import { allSnacksIds } from './allSnacksIds'
import { recurringSnacksIds } from './recurringSnacksIds'
import { totalPrice } from './totalPrice'

export const rootReducer = combineReducers({ 
  allSnacksDetails,
  allSnacksIds,
  recurringSnacksIds,
  totalPrice
})