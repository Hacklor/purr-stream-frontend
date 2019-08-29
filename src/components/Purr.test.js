import React from 'react';
import { render } from '@testing-library/react';
import Purr from './Purr';

describe('Purr', () => {
  it('shows a single purr', () => {
    const purr = {
      id: 1,
      author: 'AuthorA',
      content: 'Content of the purr',
      created_at: '2019-08-29T16:22:46.158792Z'
    }
    const { queryByText, queryByTestId } = render(<Purr purr={ purr } />)

    expect(queryByText('AuthorA')).not.toBeNull()
    expect(queryByText('Content of the purr')).not.toBeNull()
    expect(queryByTestId('created_at')).not.toBeNull()
  })
})
