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

        wait(() => {
            expect(getByLabelText('Author:').value).toEqual('NewAuthor')
        })
    })
})