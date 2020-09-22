import React from 'react'
import { screen, render } from '@testing-library/react'
import Error from './Error'
import { MemoryRouter } from 'react-router-dom';

describe('Error Component', () => {
  it('Should render the correct content', () => {
    render (
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    )

  const errorHeader = screen.getByRole('heading', { name: 'Error:'})
  const errorMessage = screen.getByRole('heading', { name: 'Sorry! Unable to get snacks. Please try again.'})

  expect(errorHeader).toBeInTheDocument()
  expect(errorMessage).toBeInTheDocument()
  })
})