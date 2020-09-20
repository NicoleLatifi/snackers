import React from 'react';
import './RecurringSnacks.css';
import RecurringSnackCard from '../RecurringSnackCard/RecurringSnackCard'

const RecurringSnacks = ({ allSnacksDetails, recurringSnacksIds, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  const recurringSnacksSection = recurringSnacksIds.map((snackId) => {
    return <RecurringSnackCard
      allSnacksDetails={allSnacksDetails}
      snackId={snackId}
      addSnack={addSnack}
      decreaseRecurringQuantity={decreaseRecurringQuantity}
      increaseRecurringQuantity={increaseRecurringQuantity}
      key={snackId}
    />
  })

  return (
    <>
      <h2>Recurring Snacks</h2>
      {recurringSnacksIds.length === 0 &&
        <p>You have no recurring snacks.</p>
      }
      <section>
        {recurringSnacksSection}
      </section>
    </>
  )
}

export default RecurringSnacks;