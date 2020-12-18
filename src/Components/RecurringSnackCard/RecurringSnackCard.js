import React from 'react';
import './RecurringSnackCard.css';
import Button from '../Button/Button'
import QuantityButton from '../QuantityButton/QuantityButton'
import PropTypes from 'prop-types';

const RecurringSnackCard = ({ allSnacksDetails, snackId, addSnack, decreaseRecurringQuantity, increaseRecurringQuantity, removeFromRecurring, pauseRecurringSnack }) => {
  const snackDetails = allSnacksDetails[snackId]

  return (
  <div className="recurring-snack-card">
    <img className="recurring-snack-image" src={snackDetails.image} alt={snackDetails.name} />
    <div className="recurring-text">
      <h3>{snackDetails.name}</h3>
      <p>{snackDetails.brand}</p>
      <p className="recurring-price">${snackDetails.price} / {snackDetails.sizeValue} {snackDetails.sizeUnit}</p>
    </div>

    { allSnacksDetails[snackId].recurringStatus !== "active" &&
      <div className="recurring-buttons-container">
        <div className="top-button">
          <Button
            buttonText="Reactivate" 
            snackId={snackId}
            addSnack={addSnack}
          />
        </div>
        <Button
          buttonText="Remove" 
          snackId={snackId} 
          removeFromRecurring={removeFromRecurring}
        />
      </div>
    }

    { allSnacksDetails[snackId].recurringStatus === "active" &&
     
        <div className="recurring-buttons-container">
          <div className="quantity-buttons-container top-button">
            <QuantityButton
              snackId={snackId}
              buttonText="-"
              buttonType="Decrease"
              fromRecurringPage={true}
              decreaseRecurringQuantity={decreaseRecurringQuantity}
              increaseRecurringQuantity={increaseRecurringQuantity}
            /> 
            <span className="quantity">{allSnacksDetails[snackId].quantity}</span>
            <QuantityButton
              snackId={snackId}
              buttonText="+"
              buttonType="Increase"
              decreaseRecurringQuantity={decreaseRecurringQuantity}
              increaseRecurringQuantity={increaseRecurringQuantity}
            />
          </div>
          <Button
          buttonText="Pause" 
          snackId={snackId}
          pauseRecurringSnack={pauseRecurringSnack}
          />
        </div>
     
    }
  </div>  
  );
}

export default RecurringSnackCard

RecurringSnackCard.propTypes = {
  allSnacksDetails: PropTypes.object,
  snackId: PropTypes.number,
  addSnack: PropTypes.func,
  decreaseRecurringQuantity: PropTypes.func,
  increaseRecurringQuantity: PropTypes.func,
  removeFromRecurring: PropTypes.func,
  pauseRecurringSnack: PropTypes.func,
}