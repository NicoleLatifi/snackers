import React from 'react';
import './BrowseSnacks.css';
import BrowsingSnackCard from '../BrowsingSnackCard/BrowsingSnackCard'

const BrowseSnacks = ({ allSnacksDetails, allSnacksIds, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  const browsingSnacksCards =
    allSnacksIds.reduce((browsingSnacksCards, snackId ) => {
      if(Object.keys(allSnacksDetails).includes(snackId.toString())) {
        browsingSnacksCards.push(
          <BrowsingSnackCard
          allSnacksDetails={allSnacksDetails}
          snackId={snackId}
          addSnack={addSnack}
          decreaseRecurringQuantity={decreaseRecurringQuantity}
          increaseRecurringQuantity={increaseRecurringQuantity}
          key={snackId}
          />
        )
      }
      return browsingSnacksCards
    }, [])
  
  return (
    <div>
      <h2 className="header-text">Browse Snacks</h2>
      {browsingSnacksCards}
    </div>
  )
}

export default BrowseSnacks;