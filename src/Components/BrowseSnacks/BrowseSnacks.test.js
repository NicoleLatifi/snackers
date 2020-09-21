import React from 'react';
import BrowseSnacks from './BrowseSnacks';
import { screen, render } from '@testing-library/react';

describe('BrowseSnacks Component', () => {
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
        image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg",
        quantity: 0
      }
    }
  })

  it('Should render snacks', () => {
    const allSnacksIds = [101]

    render (
      <BrowseSnacks 
        allSnacksDetails={allSnacksDetails}
        allSnacksIds={allSnacksIds}
      />
    )

    const name = screen.getByRole('heading', { name: 'Chips'})
    const addButton = screen.getByRole('button', { name: 'Add snack' })

    expect(name).toBeInTheDocument
    expect(addButton).toBeInTheDocument
  })
})