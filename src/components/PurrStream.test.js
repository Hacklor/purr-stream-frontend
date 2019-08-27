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
})
