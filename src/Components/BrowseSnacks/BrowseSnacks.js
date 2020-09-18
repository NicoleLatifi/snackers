import React from 'react';
import './BrowseSnacks.css';
import BrowsingSnackCard from '../BrowsingSnackCard/BrowsingSnackCard'

const BrowseSnacks = ({ allSnacksDetails, allSnacksIds }) => {
  return (
    allSnacksIds.map((snackId) => {
      return <BrowsingSnackCard
      allSnacksDetails={allSnacksDetails}
      snackId={snackId}
      key={snackId}
      />
    })
  );
}

export default BrowseSnacks;