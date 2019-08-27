import React from 'react';
import { render } from '@testing-library/react';
import Purr from './Purr';

describe('Purr', () => {
  it('shows a single purr', () => {
    const purr = {
      id: 1,
      author: 'AuthorA',
      content: 'Content of the purr'
    }
    const { queryByText } = render(<Purr purr={ purr } />)

    expect(queryByText('AuthorA')).not.toBeNull()
    expect(queryByText('Content of the purr')).not.toBeNull()
  })
})
