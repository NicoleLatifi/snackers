import React from 'react';
import './BrowseSnacks.css';
import BrowsingSnackCard from '../BrowsingSnackCard/BrowsingSnackCard'

const BrowseSnacks = ({ allSnacksDetails, allSnacksIds, recurringSnacks, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  return (
    allSnacksIds.map((snackId) => {
      return <BrowsingSnackCard
      allSnacksDetails={allSnacksDetails}
      snackId={snackId}
      recurringSnacks={recurringSnacks}
      addSnack={addSnack}
      decreaseRecurringQuantity={decreaseRecurringQuantity}
      increaseRecurringQuantity={increaseRecurringQuantity}
      key={snackId}
      />
    })
  );
}

export default BrowseSnacks;