import React from 'react';
import './BrowsingSnackCard.css';
import Button from '../Button/Button'

const BrowsingSnackCard = ({ allSnacksDetails, snackId, recurringSnacks }) => {
  const snackDetails = allSnacksDetails[snackId]
  return (
  <>
    <h2>Snack Name</h2>
    <img className='snack-image' src={snackDetails.image} alt={snackDetails.name} />
    <p>{snackDetails.name}</p>
    <p>{snackDetails.brand}</p>
    <p>${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>
    <p>{snackDetails.allergens}</p>
    <p>{snackDetails.organic}</p>

    { !Object.keys(recurringSnacks).includes(snackId) &&
      <Button buttonText="Add" /> }
  </>  
  );
}

export default BrowsingSnackCard;