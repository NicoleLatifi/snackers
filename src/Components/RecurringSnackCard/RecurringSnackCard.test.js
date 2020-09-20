import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import RecurringSnackCard from './RecurringSnackCard'

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
        quantity: 1,
        recurringStatus: "active"
      },
      202: {
        name: "Popcorn",
        quantity: 0,
        recurringStatus: "paused"
      }
    }
  })

  it('Should display the correct content when rendering active snack', () => {
    const snackId = 101

    render (
      <RecurringSnackCard 
        allSnacksDetails={allSnacksDetails}
        snackId={snackId}
      />
    )

    const name = screen.getByRole('heading', { name: 'Chips'})
    const brand = screen.getByText('Lays')
    const price = screen.getByText('$1 / 10 OZ')
    const image = screen.getByRole('img', { name: 'Chips'})
    const decreaseButton = screen.getByRole('button', {name: 'Decrease quantity'})
    const increaseButton = screen.getByRole('button', {name: 'Increase quantity'})
    const pauseButton = screen.getByRole('button', {name: 'Pause snack'})

    expect(name).toBeInTheDocument
    expect(brand).toBeInTheDocument
    expect(price).toBeInTheDocument
    expect(image).toBeInTheDocument
    expect(decreaseButton).toBeInTheDocument
    expect(increaseButton).toBeInTheDocument
    expect(pauseButton).toBeInTheDocument
  })

  it('Should display the correct content when rendering active snack', () => {
    const snackId = 202

    render (
      <RecurringSnackCard 
        allSnacksDetails={allSnacksDetails}
        snackId={snackId}
      />
    )

    const name = screen.getByRole('heading', { name: 'Popcorn'})
    const reactivateButton = screen.getByRole('button', {name: 'Reactivate snack'})
    const removeButton = screen.getByRole('button', {name: 'Remove snack'})

    expect(name).toBeInTheDocument
    expect(reactivateButton).toBeInTheDocument
    expect(removeButton).toBeInTheDocument
  })
})