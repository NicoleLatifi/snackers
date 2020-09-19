import React from 'react';
import './RecurringSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const RecurringSnackCard = ({ allSnacksDetails, snackId, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
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

    { allSnacksDetails[snackId].quantity === 0 &&
      <Button
        buttonText="Reactivate" 
        snackId={snackId} 
        addSnack={addSnack} 
      />
      <Button
        buttonText="Remove" 
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
        <Button
        buttonText="Pause" 
        snackId={snackId} 
        addSnack={addSnack} 
        />
      </div>
    }
  </>  
  );
}

export default RecurringSnackCard;