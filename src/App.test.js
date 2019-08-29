import React from 'react';
import { render } from '@testing-library/react';
import { wait } from '@testing-library/dom'
import App from './App';
import PurrService from './service/PurrService';

jest.mock('./components/PurrStream')
jest.mock('./components/CreatePurr')
jest.mock('./service/PurrService')

describe('App', () => {

  it('renders PurrStream and passes purrService', () => {
    const { queryByText, debug } = render(<App />)

    expect(queryByText('MockedPurrStream: {"purrService":{}}')).toBeTruthy()
  })

  it('renders the CreatePurr and passes purrService', async () => {
    const { queryByText, debug } = render(<App />)

    expect(queryByText('MockedCreatePurr: {"purrService":{}}')).toBeTruthy()
  })
})
