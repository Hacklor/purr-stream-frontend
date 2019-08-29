import React from 'react';
import { render } from '@testing-library/react';
import { wait } from '@testing-library/dom'
import App from './App';
import PurrService from './service/PurrService';

jest.mock('./components/PurrStream')
jest.mock('./components/CreatePurr')
jest.mock('./service/PurrService')

describe('App', () => {
  const fakePurrs = [
    { id: 1, author: 'AuthorA', content: 'Content of the purr 1' },
    { id: 2, author: 'AuthorB', content: 'Content of the purr 2' },
    { id: 3, author: 'AuthorC', content: 'Content of the purr 3' }
  ]

  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakePurrs)
      };
      return Promise.resolve(fetchResponse);
    })
  })

  afterEach(() => {
    window.fetch.mockRestore();
  })

  it('passes the purrs as props to PurrStream', async () => {
    const { queryByText } = render(<App />)

    await wait(() => {
      expect(queryByText(JSON.stringify(fakePurrs))).toBeTruthy()
    })
  })

  it('renders the CreatePurr component', async () => {
    const { queryByText, debug } = render(<App />)

    expect(queryByText('CreatePurr: {"purrService":{}}')).toBeTruthy()
  })
})
