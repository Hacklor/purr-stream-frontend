import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/PurrStream')

it('renders the purr stream', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('MockedPurrStream')).toBeTruthy()
});
