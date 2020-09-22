import React from 'react'
import { screen, render } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('Should render the correct content', () => {
    render (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

  const snackers = screen.getByRole('heading', { name: 'snackers'})
  const calendarIcon = screen.getByRole('img', { name: 'Calendar icon, click to see recurring snacks.'})

  expect(snackers).toBeInTheDocument()
  expect(calendarIcon).toBeInTheDocument()
  })
})