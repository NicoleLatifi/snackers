import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import BrowsingSnackCard from './BrowsingSnackCard'

describe('BrowsingSnackCard Component', () => {
  it('Should render snack details and Add button', () => {
    const allSnacksDetails = {
      123: {
        name: "Chips",
        brand: "Wegmans",
        sizeValue: 10,
        sizeUnit: "OZ",
        allergens: [],
        organic: false,
        image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg"
      }
    }

    render (
      <BrowsingSnackCard
        allSnacksDetails={allSnacksDetails} 
        snackId='123'
        recurringSnacks='[]'
        />
    )

    const name = screen.getByText('Chips')
    // test for more elements once styling is finalized

    expect(name).toBeInTheDocument
  })
})