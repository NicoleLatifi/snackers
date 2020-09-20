import React from 'react';
import './RecurringSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const RecurringSnackCard = ({ allSnacksDetails, snackId, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity, removeFromRecurring, pauseRecurringSnack }) => {
  const snackDetails = allSnacksDetails[snackId]

  return (
  <>
    <img className='snack-image' src={snackDetails.image} alt={snackDetails.name} />
    <h3>{snackDetails.name}</h3>
    <p>{snackDetails.brand}</p>
    <p>${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>

    { allSnacksDetails[snackId].recurringStatus !== "active" &&
      <>
        <Button
          buttonText="Reactivate" 
          snackId={snackId}
          addSnack={addSnack}
        />
        <Button
          buttonText="Remove" 
          snackId={snackId} 
          removeFromRecurring={removeFromRecurring}
        />
      </>
    }

    { allSnacksDetails[snackId].recurringStatus === "active" &&
      <div className="quantity-buttons-container">
        <QuantityButton
          snackId={snackId}
          buttonText="-"
          buttonType="Decrease"
          fromRecurringPage="true"
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
        pauseRecurringSnack={pauseRecurringSnack}
        />
      </div>
    }
  </>  
  );
}

export default RecurringSnackCard;