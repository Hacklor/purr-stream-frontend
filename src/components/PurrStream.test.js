import React from 'react';
import { render, wait } from '@testing-library/react';
import PurrStream from './PurrStream';
import PurrService from '../service/PurrService';

describe('PurrStream', () => {

  it('shows message when undefined', () => {
    const mockedList = jest.fn()
    const mockedPurrService = new PurrService();
    mockedPurrService.list = mockedList

    const { queryByText } = render(<PurrStream purrService={mockedPurrService} />)

    expect(queryByText('No purrs present')).not.toBeNull()
  })

  it('shows message when empty', () => {
    const mockedList = jest.fn()
    const mockedPurrService = new PurrService();
    mockedPurrService.list = mockedList

    const { queryByText } = render(<PurrStream purrService={mockedPurrService} />)

    expect(queryByText('No purrs present')).not.toBeNull()
  })

  it('calls the list of PurrService', () => {
    const mockedList = jest.fn()
    const mockedPurrService = new PurrService();
    mockedPurrService.list = mockedList

    const { queryByText } = render(<PurrStream purrService={mockedPurrService} />)

    expect(mockedList).toHaveBeenCalled()
  })

  describe('with real PurrService', () => {
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

    it('renders multiple purrs', () => {
      const purrService = new PurrService()
      const { queryByText } = render(<PurrStream purrService={purrService} />)

      wait(() => {
        fakePurrs.forEach(p => {
          expect(queryByText(p.author)).not.toBeNull()
          expect(queryByText(p.content)).not.toBeNull()
        })
      })
    })
  })
})

