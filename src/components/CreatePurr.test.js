import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import PurrService from '../service/PurrService';
import CreatePurr from './CreatePurr';

describe('CreatePurr', () => {
  it('renders with empty fields', () => {
    const { getByTestId } = render(<CreatePurr />)

    expect(getByTestId('author').value).toEqual('')
    expect(getByTestId('content').value).toEqual('')
  })

  it('fills the form', () => {
    const { getByTestId } = render(<CreatePurr />)

    fireEvent.change(getByTestId('author'), { value: 'NewAuthor' })
    fireEvent.change(getByTestId('content'), { value: 'NewContent' })

    wait(() => {
      expect(getByTestId('author').value).toEqual('NewAuthor')
      expect(getByTestId('content').value).toEqual('NewContent')
    })
  })

  it('handles the submit', () => {
    const mockedCreate = jest.fn()
    const mockedPurrService = new PurrService();
    mockedPurrService.create = mockedCreate

    const { getByTestId } = render(<CreatePurr purrService={mockedPurrService} />)
    fireEvent.change(getByTestId('author'), { value: 'NewAuthor' })
    fireEvent.change(getByTestId('content'), { value: 'NewContent' })

    wait(() => {
      expect(getByTestId('author').value).toEqual('NewAuthor')
      expect(getByTestId('content').value).toEqual('NewContent')
    })

    fireEvent.submit(getByTestId("form"))

    wait(() => {
      expect(mockedCreate).toHaveBeenCalledTimes(1)
      expect(mockedCreate).toHaveBeenCalledWith({author: 'NewAuthor', content: 'NewContent'})
    })
  })
})
