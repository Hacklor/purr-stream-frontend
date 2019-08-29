import React from 'react';
import { render } from '@testing-library/react';
import CreatePurr from './CreatePurr';

describe('CreatePurr', () => {
    it('renders an instance', () => {
        render(<CreatePurr />)
    })
})