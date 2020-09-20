import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import RecurringSnackCard from './RecurringSnackCard'

describe('BrowsingSnackCard Component', () => {
  let allSnacksDetails, recurringSnacksIds, snackId
  beforeEach(() => {
    allSnacksDetails = {
      101: {
        name: "Chips",
        brand: "Wegmans",
        price: 2,
        sizeValue: 10,
        sizeUnit: "OZ",
        image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg",
        quantity: 1,
        recurringStatus: "active"
      }
    }
    recurringSnacksIds = [101]
    snackId = 101
  })

  it('Should display the correct content when rendered', () => {
    render (
      <RecurringSnackCard 
        allSnacksDetails={allSnacksDetails}
        recurringSnacksIds={recurringSnacksIds}
        snackId={snackId}
      />
    )

    const name = screen.getByRole('heading', { name: 'Chips'})
    const brand = screen.getByText('Wegmans')
    const price = screen.getByText('$2 / 10 OZ')
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

  it('Should render any recurring snacks', () => {
    // const recurringSnacksIds = [101]

    // render (
    //   <RecurringSnacks 
    //     allSnacksDetails={allSnacksDetails}
    //     recurringSnacksIds={recurringSnacksIds}
    //   />
    // )

    // const name = screen.getByRole('heading', { name: 'Chips'})

    // expect(name).toBeInTheDocument
  })
})


// Should display the correct content when rendered
// Should change buttons and state when quantity is decreased to zero
// Should change buttons and state when snack is paused
// Should change buttons and state when snack is reactivated
// Should remove snack when removed