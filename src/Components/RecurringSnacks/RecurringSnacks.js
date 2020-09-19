import React from 'react';
import './RecurringSnacks.css';
import RecurringSnackCard from '../RecurringSnackCard/RecurringSnackCard'

const RecurringSnacks = ({ allSnacksDetails, recurringSnacksIds, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  return (
    allSnacksIds.map((snackId) => {
      return <RecurringSnackCard
      recurringSnacksDetails={recurringSnacksDetails}
      snackId={snackId}
      addSnack={addSnack}
      decreaseRecurringQuantity={decreaseRecurringQuantity}
      increaseRecurringQuantity={increaseRecurringQuantity}
      key={snackId}
      />
    })
  );
}

export default RecurringSnacks;