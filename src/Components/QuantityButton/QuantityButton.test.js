import React from 'react';
import QuantityButton from './QuantityButton';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('QuantityButton', () => {
  it('Should display the correct text', () => {
    render (
      <QuantityButton
        buttonText="-"
      />
    )
    
    const decreaseButton = screen.getByText('-')
    expect(decreaseButton).toBeInTheDocument

    render (
      <QuantityButton
        buttonText="+"
      />
    )

    const increaseButton = screen.getByText('+')
    expect(increaseButton).toBeInTheDocument
  })

  it('Should fire the correct method when the decrease button clicked', () => {
    const mockDecreaseRecurringQuantity = jest.fn()
    const mockIncreaseRecurringQuantity = jest.fn()

    render (
      <QuantityButton
        buttonText="-"
        buttonType="Decrease"
        decreaseRecurringQuantity={mockDecreaseRecurringQuantity}
        increaseRecurringQuantity={mockIncreaseRecurringQuantity}
      />
    )
    
    const decreaseButton = screen.getByText('-')
    fireEvent.click(decreaseButton)
    expect(mockDecreaseRecurringQuantity).toHaveBeenCalledTimes(1)
  })

  it('Should fire the correct method when the increase button clicked', () => {
    const mockDecreaseRecurringQuantity = jest.fn()
    const mockIncreaseRecurringQuantity = jest.fn()

    render (
      <QuantityButton
        buttonText="+"
        buttonType="Increase"
        decreaseRecurringQuantity={mockDecreaseRecurringQuantity}
        increaseRecurringQuantity={mockIncreaseRecurringQuantity}
      />
    )
  
    const increaseButton = screen.getByText('+')
    fireEvent.click(increaseButton)
    expect(mockIncreaseRecurringQuantity).toHaveBeenCalledTimes(1)
  })
})