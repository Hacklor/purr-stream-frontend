import React from 'react';
import { render } from '@testing-library/react';
import PurrStream from './PurrStream';

describe('PurrStream', () => {
  describe('no purrs present', () => {
    it('shows message when undefined', () => {
      const { queryByText } = render(<PurrStream />)

      expect(queryByText('No purrs present')).not.toBeNull()
    })

    it('shows message when empty', () => {
      const { queryByText } = render(<PurrStream purrs={ [] } />)

      expect(queryByText('No purrs present')).not.toBeNull()
    })
  })

  describe('purrs are present', () => {
    it('shows a single purr', () => {
      const purrs = [
        { id: 1, author: 'AuthorA', content: 'Content of the purr' }
      ]
      const { queryByText } = render(<PurrStream purrs={ purrs } />)

      expect(queryByText('AuthorA')).not.toBeNull()
      expect(queryByText('Content of the purr')).not.toBeNull()
    })
  })
})

