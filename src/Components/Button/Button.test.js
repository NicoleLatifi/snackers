import React from 'react'
import Button from './Button'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('QuantityButton', () => {
  it('Should display the correct text', () => {
    render (
      <Button
        buttonText="Add"
      />
    )

    const addButton = screen.getByText('Add')
    expect(addButton).toBeInTheDocument

    render (
      <Button
        buttonText="Reactivate"
      />
    )

    const reactivateButton = screen.getByText('Reactivate')
    expect(reactivateButton).toBeInTheDocument

    render (
      <Button
        buttonText="Pause"
      />
    )

    const pauseButton = screen.getByText('Pause')
    expect(pauseButton).toBeInTheDocument

    render (
      <Button
        buttonText="Remove"
      />
    )

    const removeButton = screen.getByText('Remove')
    expect(removeButton).toBeInTheDocument
  })

  it('Should fire the correct method when the increase button clicked', () => {
    const mockAddSnack = jest.fn()

    render (
      <Button
        buttonText="Add"
        addSnack={mockAddSnack}
      />
    )

    const addButton = screen.getByText('Add')
    fireEvent.click(addButton)
    expect(mockAddSnack).toHaveBeenCalledTimes(1)


    render (
      <Button
        buttonText="Reactivate"
        addSnack={mockAddSnack}
      />
    )

    const reactivateButton = screen.getByText('Reactivate')
    fireEvent.click(reactivateButton)
    expect(mockAddSnack).toHaveBeenCalledTimes(2)


    const mockRemoveFromRecurring = jest.fn()

    render (
      <Button
        buttonText="Remove"
        removeFromRecurring={mockRemoveFromRecurring}
      />
    )

    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    expect(mockRemoveFromRecurring).toHaveBeenCalledTimes(1)


    const mockPauseRecurringSnack = jest.fn()

    render (
      <Button
        buttonText="Pause"
        pauseRecurringSnack={mockPauseRecurringSnack}
      />
    )

    const pauseButton = screen.getByText('Pause')
    fireEvent.click(pauseButton)
    expect(mockPauseRecurringSnack).toHaveBeenCalledTimes(1)
  })
})
