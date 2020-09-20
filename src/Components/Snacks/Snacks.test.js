import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
import React from 'react';
import Snacks from './Snacks';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getAllSnacksIds, getSnackDetail, getSnackPrice } from '../../Helpers/apiCalls';
jest.mock('../../Helpers/apiCalls')

describe('BrowsingSnackCard Component', () => {
  let allSnacksDetails, allSnacksIds
  beforeEach(() => {
    allSnacksDetails = { 101: {} },
    allSnacksIds = [101]
  })

  it('Should get data and render the browsing snack cards', async () => {
    getAllSnacksIds.mockResolvedValue(allSnacksIds)

    getSnackDetail.mockResolvedValue({ 
      name: "Chips",
      sizeValue: 10,
      sizeUnit: "OZ",
      image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg"
    })

    getSnackPrice.mockResolvedValue(1)

    render (
      <MemoryRouter>
        <Snacks />
      </MemoryRouter>
    )

    const name = await waitFor(() => screen.getByText('Chips'))
    const price = await waitFor(() => screen.getByText('$1 / 10 OZ'))
    const addButton = screen.getByRole('button', {name: 'Add snack'})

    expect(name).toBeInTheDocument
    expect(price).toBeInTheDocument
    expect(addButton).toBeInTheDocument
  })

  it('Clicking add button and quantity buttons should effect buttons and quantity displayed', async () => {
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
        <Snacks />
      </MemoryRouter>
    )

    const addButton = await waitFor(() => screen.getByRole('button', {name: 'Add snack'}))
    expect(addButton).toBeInTheDocument

    fireEvent.click(addButton)

    const decreaseButton = await waitFor(() => screen.getByRole('button', {name: 'Decrease quantity'}))
    let quantity = await waitFor(() => screen.getByText('1'))
    const increaseButton = await waitFor(() => screen.getByRole('button', {name: 'Increase quantity'}))
    expect(decreaseButton).toBeInTheDocument
    expect(increaseButton).toBeInTheDocument
    expect(quantity).toBeInTheDocument

    fireEvent.click(increaseButton)

    quantity = await waitFor(() => screen.getByText('2'))
    expect(quantity).toBeInTheDocument

    fireEvent.click(decreaseButton)
    fireEvent.click(decreaseButton)

    const addButton = await waitFor(() => screen.getByRole('button', {name: 'Add snack'}))
    expect(addButton).toBeInTheDocument
  })
})