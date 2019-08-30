import React from 'react';
import { render, wait } from '@testing-library/react';
import PurrStream from './PurrStream';
import DestroyPurr from './DestroyPurr';
import PurrService from '../service/PurrService';

jest.mock('./DestroyPurr')

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

  describe('with mocked PurrService', () => {
    const service = new PurrService()
    const purrs = [
      { id: 1, author: 'AuthorA', content: 'Content of the purr 1' },
      { id: 2, author: 'AuthorB', content: 'Content of the purr 2' },
      { id: 3, author: 'AuthorC', content: 'Content of the purr 3' }
    ]

    beforeEach(() => {
      service.list = jest.fn(() => Promise.resolve(purrs))
    })

    afterEach(() => {
      service.list.mockRestore()
    })

    it('renders multiple purrs', async () => {
      const { queryByText } = await render(<PurrStream purrService={service} />)

      purrs.forEach(p => {
        expect(queryByText(p.author)).not.toBeNull()
        expect(queryByText(p.content)).not.toBeNull()
      })
    })

    it('renders the DestroyPurr for each purr', async () => {
      const { queryByText, debug } = await render(<PurrStream purrService={service} />)

      purrs.forEach(p => {
        expect(queryByText("MockedDestroyPurr:" + p.id)).not.toBeNull()
        expect(queryByText("Purrservice" + p.id + ":present")).not.toBeNull()
      })
    })
  })
})

