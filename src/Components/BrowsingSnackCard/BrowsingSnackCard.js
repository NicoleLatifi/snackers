import React from 'react';
import './BrowsingSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const BrowsingSnackCard = ({ allSnacksDetails, snackId, recurringSnacks, addSnack }) => {
  const snackDetails = allSnacksDetails[snackId]
  const recurringSnacksList = Object.keys(recurringSnacks)
  
  return (
  <>
    <h2>Snack Name</h2>
    <img className='snack-image' src={snackDetails.image} alt={snackDetails.name} />
    <p>{snackDetails.name}</p>
    <p>{snackDetails.brand}</p>
    <p>${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>
    <p>{snackDetails.allergens}</p>
    <p>{snackDetails.organic}</p>

    { !recurringSnacksList.includes(snackId.toString()) &&
      <Button
        buttonText="Add" 
        snackId={snackId} 
        addSnack={addSnack} 
      /> }
    { recurringSnacksList.includes(snackId.toString()) &&
      <QuantityButton
        snackId={snackId}
        recurringSnacks={recurringSnacks}
      /> }
  </>  
  );
}

export default BrowsingSnackCard;