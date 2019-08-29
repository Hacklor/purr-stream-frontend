import React from 'react';
import { render } from '@testing-library/react';
import PurrStream from './PurrStream';

describe('PurrStream', () => {
  it('shows message when undefined', () => {
    const { queryByText } = render(<PurrStream />)

    expect(queryByText('No purrs present')).not.toBeNull()
  })

  it('shows message when empty', () => {
    const { queryByText } = render(<PurrStream purrs={ [] } />)

    expect(queryByText('No purrs present')).not.toBeNull()
  })

  it('shows multiple purrs', () => {
    const purrs = [
      { id: 1, author: 'AuthorA', content: 'Content of the purr 1' },
      { id: 2, author: 'AuthorB', content: 'Content of the purr 2' },
      { id: 3, author: 'AuthorC', content: 'Content of the purr 3' }
    ]
    const { queryByText } = render(<PurrStream purrs={ purrs } />)

    purrs.forEach(p => {
      expect(queryByText(p.author)).not.toBeNull()
      expect(queryByText(p.content)).not.toBeNull()
    })
  })
})

