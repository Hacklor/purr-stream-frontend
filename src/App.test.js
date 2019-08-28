import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
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
    console.log("1")
    const { queryByText } = await render(<App />)
    console.log("2")

    await Promise.resolve()
    console.log("3")

    expect(queryByText(JSON.stringify(fakePurrs))).toBeTruthy()
    console.log("4")
  })
})
