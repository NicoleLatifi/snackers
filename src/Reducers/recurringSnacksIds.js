export const recurringSnacksIds = (state = [], action) => {
  switch(action.type) {
      case 'ADD_RECURRING_ID':

        console.log(state)

        return ( [...state, action.snackId] )
      default: 
        return state
  }
}