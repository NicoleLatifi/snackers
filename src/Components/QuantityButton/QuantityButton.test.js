import React from 'react';
import QuantityButton from './QuantityButton';
import { screen, render } from '@testing-library/react';

describe('QuantityButton', () => {
  it('Should display the correct text', () => {
    render (
      <QuantityButton
        buttonText="-"
      />
    )
    
    const decreaseButtonText = screen.getByText('-')
    expect(decreaseButtonText).toBeInTheDocument

    render (
      <QuantityButton
        buttonText="+"
      />
    )

    const increaseButtonText = screen.getByText('+')
    expect(increaseButtonText).toBeInTheDocument
  })

})