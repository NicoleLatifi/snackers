export const recurringSnacksIds = (state = [], action) => {
  switch(action.type) {
      case 'ADD_RECURRING_ID':
        return ( [...state, action.snackId] )
      case 'REMOVE_RECURRING-ID':
        let recurringSnacksIdsCopy = [...state]
        const index = recurringSnacksIdsCopy.indexOf(action.snackId)
        recurringSnacksIdsCopy.splice(index, 1)
        return recurringSnacksIdsCopy
      default: 
        return state
  }
}