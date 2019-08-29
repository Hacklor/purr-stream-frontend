import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import CreatePurr from './CreatePurr';

describe('CreatePurr', () => {
    it('renders with empty fields', () => {
        const { getByLabelText } = render(<CreatePurr />)

        expect(getByLabelText('Author:').value).toEqual('')
        expect(getByLabelText('Content:').value).toEqual('')
    })

    it('fills the form', () => {
        const { getByLabelText } = render(<CreatePurr />)

        fireEvent.change(getByLabelText('Author:'), { value: 'NewAuthor' })
        fireEvent.change(getByLabelText('Content:'), { value: 'NewContent' })

        wait(() => {
            expect(getByLabelText('Author:').value).toEqual('NewAuthor')
            expect(getByLabelText('Content:').value).toEqual('NewContent')
        })
    })

    it('handles the submit', () => {
        const mockedSubmitInternal = jest.fn()

        const { getByLabelText, getByTestId } = render(<CreatePurr handleSubmitInternal={mockedSubmitInternal} />)
        fireEvent.change(getByLabelText('Author:'), { value: 'NewAuthor' })
        fireEvent.change(getByLabelText('Content:'), { value: 'NewContent' })
        
        wait(() => {
            expect(getByLabelText('Author:').value).toEqual('NewAuthor')
            expect(getByLabelText('Content:').value).toEqual('NewContent')
        })

        fireEvent.submit(getByTestId("form"))

        wait(() => {
            expect(mockedSubmitInternal).toHaveBeenCalledTimes(1)
            expect(mockedSubmitInternal).toHaveBeenCalledWith({author: 'NewAuthor', content: 'NewContent'})
        })
    })
})