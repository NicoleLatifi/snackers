import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
import React from 'react';
import App from './App';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls';
jest.mock('../../Helpers/apiCalls')

describe('App Component', () => {
  let allSnacksDetails, allSnacksIds
  beforeEach(() => {
    allSnacksDetails = { 101: {} },
    allSnacksIds = [101]
  })
  
  it('Should allow user to add recurring snack and then view it on Recurring Snacks page', async () => {
    getAllSnacksIds.mockResolvedValue(allSnacksIds)

    getSnackDetail.mockResolvedValue({
      name: "Chips",
      sizeValue: 10,
      sizeUnit: "OZ",
      image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg",
    })

    getSnackPrice.mockResolvedValue(1)
  
    render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const addButton = await waitFor(() => screen.getByRole('button', {name: 'Add snack'}))
    fireEvent.click(addButton)

    const increaseButton = await waitFor(() => screen.getByRole('button', {name: 'Increase quantity'}))
    fireEvent.click(increaseButton)

    const calendarIcon = screen.getByRole('img', { name: 'Calendar icon, click to see recurring snacks.'})
    expect(calendarIcon).toBeInTheDocument()

    fireEvent.click(calendarIcon)

    const headerAndPrice = screen.getByRole('heading', { name: 'Recurring Snacks | Total: $1.00'})
    const name = screen.getByRole('heading', { name: 'Chips'})

    expect(headerAndPrice).toBeInTheDocument
    expect(name).toBeInTheDocument
  })
});
