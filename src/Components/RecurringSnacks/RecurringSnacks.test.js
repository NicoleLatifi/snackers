import React from 'react';
import RecurringSnacks from './RecurringSnacks';
import { screen, render } from '@testing-library/react';

describe('RecurringSnack Component', () => {
  let allSnacksDetails
  beforeEach(() => {
    allSnacksDetails = {
      101: {
        name: "Chips",
        brand: "Wegmans",
        sizeValue: 10,
        sizeUnit: "OZ",
        allergens: [],
        organic: false,
        image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg"
      }
    }
  })

  it('Should render message when there are no recurring snacks', () => {
    const recurringSnacksIds = [];

    render (
      <RecurringSnacks 
        allSnacksDetails={allSnacksDetails}
        recurringSnacksIds={recurringSnacksIds}
      />
    )

    const message = screen.getByRole('heading', { name: 'You have no recurring snacks.'})

    expect(message).toBeInTheDocument
  })

  it('Should render any recurring snacks', () => {
    const recurringSnacksIds = [101]

    render (
      <RecurringSnacks 
        allSnacksDetails={allSnacksDetails}
        recurringSnacksIds={recurringSnacksIds}
      />
    )

    const name = screen.getByRole('heading', { name: 'Chips'})

    expect(name).toBeInTheDocument
  })
})