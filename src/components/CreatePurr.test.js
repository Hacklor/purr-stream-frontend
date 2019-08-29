import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import CreatePurr from './CreatePurr';

describe('CreatePurr', () => {
    it('renders an instance', () => {
        render(<CreatePurr />)
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
})