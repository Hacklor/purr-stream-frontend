import React from 'react';
import { render } from '@testing-library/react';
import PurrStream from './PurrStream';

describe('PurrStream', () => {
  it('can render as component', () => {
		render(<PurrStream />)
  });
});
