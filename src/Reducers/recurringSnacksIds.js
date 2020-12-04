export const recurringSnacksIds = (state = [], action) => {
  switch(action.type) {
      case 'ADD_SNACK':
          const newState = [...state, ...action.recurringSnacksIds]
          return newState
      default: 
          return state
  }
}