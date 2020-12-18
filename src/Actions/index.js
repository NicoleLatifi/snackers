export const addRecurringId = (snackId) => ({
  type: 'ADD_RECURRING_ID',
  snackId
})

export const removeRecurringId = (snackId) => ({
  type: 'REMOVE_RECURRING_ID',
  snackId
})

export const allSnacksDetails = (snackId, recurringStatus) => ({
  type: 'UPDATE_RECURRING_STATUS',
  snackId,
  recurringStatus
})

export const allSnacksDetails = (snackId, amount) => ({
  type: 'UPDATE_QUANTITY',
  snackId,
  amount
})

export const setAllSnacks = () => ({
  type: 'SET_ALL_SNACKS'
})

export const calculateTotalPrice = () => ({
  type: 'CALCULATE_TOTAL_PRICE'
})