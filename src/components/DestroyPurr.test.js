import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PurrService from '../service/PurrService';
import DestroyPurr from './DestroyPurr';

describe('DestroyPurr', () => {
  const mockedDestroy = jest.fn(() => Promise.resolve())
  const service = new PurrService("url")
  const purr = {
    id: 1,
    author: 'AuthorA',
    content: 'Content of the purr',
    created_at: '2019-08-29T16:22:46.158792Z'
  }

  beforeEach(() => {
    service.destroy = mockedDestroy
  })

  afterEach(() => {
    service.destroy.mockRestore()
  })

  it('shows a delete button', () => {
    const { queryByText } = render(<DestroyPurr purr={purr} />)

    expect(queryByText('Delete')).not.toBeNull()
  })

  it('calls the purrService', async () => {
    const { getByText } = render(<DestroyPurr purr={purr} purrService={service} />)

    await fireEvent.click(getByText("Delete"))

    expect(mockedDestroy).toHaveBeenCalledWith(purr.id)
  })
})
