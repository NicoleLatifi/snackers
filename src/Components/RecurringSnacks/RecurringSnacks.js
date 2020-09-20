import React from 'react';
import './RecurringSnacks.css';
import RecurringSnackCard from '../RecurringSnackCard/RecurringSnackCard'

const RecurringSnacks = ({ allSnacksDetails, recurringSnacksIds, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity, removeFromRecurring, pauseRecurringSnack }) => {
  const recurringSnacksSection = recurringSnacksIds.map((snackId) => {
    return <RecurringSnackCard
      allSnacksDetails={allSnacksDetails}
      snackId={snackId}
      addSnack={addSnack}
      decreaseRecurringQuantity={decreaseRecurringQuantity}
      increaseRecurringQuantity={increaseRecurringQuantity}
      removeFromRecurring={removeFromRecurring}
      pauseRecurringSnack={pauseRecurringSnack}
      key={snackId}
    />
  })

  return (
    <>
      <h2>Recurring Snacks</h2>
      {recurringSnacksIds.length === 0 &&
        <h3>You have no recurring snacks.</h3>
      }
      <section>
        {recurringSnacksSection}
      </section>
    </>
  )
}

export default RecurringSnacks;