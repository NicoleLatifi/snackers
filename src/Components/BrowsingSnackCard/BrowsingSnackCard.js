import React from 'react';
import './BrowsingSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'

const BrowsingSnackCard = ({ allSnacksDetails, snackId, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity }) => {
  const snackDetails = allSnacksDetails[snackId]
  
  return (
  <div className="snack-card">
    <img className="snack-image" src={snackDetails.image} alt={snackDetails.name} />
    <div className="snack-text">
      <h2 className="snack-name">{snackDetails.name}</h2>
      <p>{snackDetails.brand}</p>
      <p className="snack-price">${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>
    </div>

    { allSnacksDetails[snackId].quantity === 0 &&
      <Button
        className="button"
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
        <div className="quantity">{allSnacksDetails[snackId].quantity}</div>
        <QuantityButton
          snackId={snackId}
          buttonText="+"
          buttonType="Increase"
          decreaseRecurringQuantity={decreaseRecurringQuantity}
          increaseRecurringQuantity={increaseRecurringQuantity}
        /> 
      </div>
    }
  </div>  
  );
}

export default BrowsingSnackCard;