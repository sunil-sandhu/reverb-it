import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

test('renders without crashing', () => {
  const { baseElement } = render(<Game />);
  expect(baseElement).toBeDefined();
});
