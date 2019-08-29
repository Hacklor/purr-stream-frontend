import React from 'react';
import { render } from '@testing-library/react';
import { wait } from '@testing-library/dom'
import App from './App';

jest.mock('./components/PurrStream')

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

  it('passes the purrs as props', async () => {
    const { queryByText } = render(<App />)

    await wait(() => {
      expect(queryByText(JSON.stringify(fakePurrs))).toBeTruthy()
    })
  })
})
