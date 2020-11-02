import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders without crashing', () => {
  const { baseElement } = render(<Home />);
  expect(baseElement).toBeDefined();
});

test('renders a play button', () => {
  render(<Home />);
  expect(/play/i).toBeInTheDocument()
})

test('renders a progress button', () => {
  render(<Home />);
  expect(/progress/i).toBeInTheDocument()
})