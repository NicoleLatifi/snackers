export const recurringSnacksIds = (state = [], action) => {
  switch(action.type) {
      case 'ADD_RECURRING_ID':
        if (!state.includes(action.snackId)) {
          return ( [...state, action.snackId] )
        } else {
          return state
        }
      case 'REMOVE_RECURRING_ID':
        let recurringSnacksIdsCopy = [...state]
        const index = recurringSnacksIdsCopy.indexOf(action.snackId)
        recurringSnacksIdsCopy.splice(index, 1)
        return recurringSnacksIdsCopy
      default: 
        return state
  }
}