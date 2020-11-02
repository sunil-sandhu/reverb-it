import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Game from './Game';
import { defaultStyles } from '../../config/defaultStyles';


test('renders without crashing', () => {
  const { baseElement } = render(<Game />);
  expect(baseElement).toBeDefined();
});


test('renders four buttons, one for each guess option', () => {
  render(<Game />);
  const guessButtons = screen.getAllByRole("button", { name: 'guess' });
  expect(guessButtons).toHaveLength(4);
})

test('selecting the correct option turns it green', () => {
  render(<Game />);
  const guessButtons = screen.getAllByRole("button", { name: 'guess' });
  const correctButton = guessButtons[0].click()
  expect(correctButton).toHaveStyle(`background-color: ${defaultStyles.green}`);
})

test('selecting the incorrect option turns it red', () => {
  render(<Game />);
  const guessButtons = screen.getAllByRole("button", { name: 'guess' });
  const incorrectButton = guessButtons[1].click()
  expect(incorrectButton).toHaveStyle(`background-color: ${defaultStyles.red}`);
})

test('selecting the incorrect option turns it red but will turn the correct guess green ', () => {
  render(<Game />);
  const guessButtons = screen.getAllByRole("button", { name: 'guess' });
  const correctButton = guessButtons[0];
  const incorrectButton = guessButtons[1];
  fireEvent.click(incorrectButton)
  
  expect(correctButton).toHaveStyle(`background-color: ${defaultStyles.green}`);
})