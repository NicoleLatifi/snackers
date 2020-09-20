import React from 'react'
import { screen, render } from '@testing-library/react'
import BrowsingSnackCard from './BrowsingSnackCard'

describe('BrowsingSnackCard Component', () => {
  let allSnacksDetails
  beforeEach(() => {
    allSnacksDetails = {
      101: {
        name: "Chips",
        brand: "Lays",
        price: 1,
        sizeValue: 10,
        sizeUnit: "OZ",
        image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg",
        quantity: 0
      },
      202: {
        name: "Popcorn",
        quantity: 3,
        recurringStatus: "active"
      }
    }
  })

  it('Should render snack details and Add button', () => {
    const snackId = 101
    
    render (
      <BrowsingSnackCard
        allSnacksDetails={allSnacksDetails} 
        snackId={snackId}
        recurringSnacks='[]'
        />
    )

    const name = screen.getByRole('heading', {name: 'Chips'})
    const brand = screen.getByText('Lays')
    const price = screen.getByText('$1 / 10 OZ')
    const image = screen.getByRole('img', { name: 'Chips'})
    const addButton = screen.getByRole('button', {name: 'Add snack'})

    expect(name).toBeInTheDocument
    expect(brand).toBeInTheDocument
    expect(price).toBeInTheDocument
    expect(image).toBeInTheDocument
    expect(addButton).toBeInTheDocument
  })

  it('Should display the correct content when rendering active snack', () => {
    const snackId = 202

    render (
      <BrowsingSnackCard 
        allSnacksDetails={allSnacksDetails}
        snackId={snackId}
        recurringSnacks='[202]'
      />
    )

    const name = screen.getByRole('heading', { name: 'Popcorn'})
    const decreaseButton = screen.getByRole('button', {name: 'Decrease quantity'})
    let quantity = screen.getByText('3')
    const increaseButton = screen.getByRole('button', {name: 'Increase quantity'})
    
    expect(name).toBeInTheDocument
    expect(decreaseButton).toBeInTheDocument
    expect(quantity).toBeInTheDocument
    expect(increaseButton).toBeInTheDocument
  })
})