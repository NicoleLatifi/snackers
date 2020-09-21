import React from 'react';
import './BrowsingSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const BrowsingSnackCard = ({ allSnacksDetails, snackId, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  const snackDetails = allSnacksDetails[snackId]
  
  return (
  <>
    <img className='snack-image' src={snackDetails.image} alt={snackDetails.name} />
    <h2>{snackDetails.name}</h2>
    <p>{snackDetails.brand}</p>
    <p>${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>

    { allSnacksDetails[snackId].quantity === 0 &&
      <Button
        buttonText="Add" 
        snackId={snackId} 
        addSnack={addSnack} 
      /> 
    }

    { allSnacksDetails[snackId].quantity > 0 &&
      <div className="quantity-buttons-container">
        <QuantityButton
          snackId={snackId}
          buttonText="-"
          buttonType="Decrease"
          decreaseRecurringQuantity={decreaseRecurringQuantity}
          increaseRecurringQuantity={increaseRecurringQuantity}
        /> 
        <span>{allSnacksDetails[snackId].quantity}</span>
        <QuantityButton
          snackId={snackId}
          buttonText="+"
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