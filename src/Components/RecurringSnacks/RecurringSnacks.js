import React from 'react';
import './RecurringSnacks.css';
import RecurringSnackCard from '../RecurringSnackCard/RecurringSnackCard'

const RecurringSnacks = ({ allSnacksDetails, recurringSnacksIds, totalPrice, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity, removeFromRecurring, pauseRecurringSnack }) => {
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
      <h2 className="header-text">Recurring Snacks<span className="space"></span>|<span className="space"></span>Total: ${totalPrice}</h2>
      {recurringSnacksIds.length === 0 &&
        <h3>You have no recurring snacks.</h3>
      }
      <section className="recurring-snacks-container">
        {recurringSnacksSection}
      </section>
    </>
  )
}

export default RecurringSnacks;