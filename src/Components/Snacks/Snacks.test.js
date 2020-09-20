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
      }
    },
    allSnacksIds = [101]
  })

  it('Should get data and render the browsing snack cards', async () => {
    getAllSnacksIds.mockResolvedValue(allSnacksIds)

    getSnackPrice.mockResolvedValue(1)

    getSnackDetail.mockResolvedValue({ 
      name: "Chips",
      brand: "Lays",
      price: 1,
      sizeValue: 10,
      sizeUnit: "OZ",
      image: "https://wfmproducts.azureedge.net/images-500/00077890461808.jpg",
      quantity: 1,
      recurringStatus: "active"
    })

    console.log(allSnacksIds)
  
    render (
      <MemoryRouter>
        <Snacks />
      </MemoryRouter>
    )

    console.log(allSnacksIds)

    const name = await waitFor(() => screen.getByText('Chips'))

    expect(name).toBeInTheDocument
  })
})