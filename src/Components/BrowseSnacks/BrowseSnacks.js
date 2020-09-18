import React from 'react';
import './BrowseSnacks.css';
import BrowsingSnackCard from '../BrowsingSnackCard/BrowsingSnackCard'

const BrowseSnacks = ({ allSnacksDetails, allSnacksIds, recurringSnacks }) => {
  return (
    allSnacksIds.map((snackId) => {
      return <BrowsingSnackCard
      allSnacksDetails={allSnacksDetails}
      snackId={snackId}
      recurringSnacks={recurringSnacks}
      key={snackId}
      />
    })
  );
}

export default BrowseSnacks;