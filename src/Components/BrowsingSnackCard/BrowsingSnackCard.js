import React from 'react';
import './BrowsingSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const BrowsingSnackCard = ({ allSnacksDetails, snackId, recurringSnacks, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
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
      <div className="quantity-buttons-container">
        <QuantityButton
          snackId={snackId}
          recurringSnacks={recurringSnacks}
          buttonType="Decrease"
          decreaseRecurringQuantity={decreaseRecurringQuantity}
          increaseRecurringQuantity={increaseRecurringQuantity}
        /> 
        <span>{recurringSnacks[snackId].quantity}</span>
        <QuantityButton
          snackId={snackId}
          recurringSnacks={recurringSnacks}
          buttonType="Increase"
          decreaseRecurringQuantity={decreaseRecurringQuantity}
          increaseRecurringQuantity={increaseRecurringQuantity}
        /> 
      </div>
    }
  </>  
  );
}

export default BrowsingSnackCard;