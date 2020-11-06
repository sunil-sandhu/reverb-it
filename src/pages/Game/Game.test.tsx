import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./Game.container";
import { defaultStyles } from "../../config/defaultStyles";

test("renders without crashing", () => {
  const { baseElement } = render(<Game />);
  expect(baseElement).toBeDefined();
});

test("renders four buttons, one for each guess option", async () => {
  render(<Game />);
  const guessButtons = await screen.findAllByRole("button", { name: "guess" });
  expect(guessButtons).toHaveLength(4);
});

test("selecting the correct option turns it green", async () => {
  render(<Game />);
  const guessButtons = await screen.findAllByRole("button", { name: "guess" });
  const correctButton = guessButtons[0];
  fireEvent.click(correctButton);
  expect(correctButton).toHaveStyle(`background: ${defaultStyles.green}`);
});

test("selecting the incorrect option turns it red", async () => {
  render(<Game />);
  const guessButtons = await screen.findAllByRole("button", { name: "guess" });
  const incorrectButton = guessButtons[1];
  fireEvent.click(incorrectButton);
  expect(incorrectButton).toHaveStyle(`background: ${defaultStyles.red}`);
});

test("selecting the incorrect option turns it red but will turn the correct guess green ", async () => {
  render(<Game />);
  const guessButtons = await screen.findAllByRole("button", { name: "guess" });
  const correctButton = guessButtons[0];
  const incorrectButton = guessButtons[1];
  fireEvent.click(incorrectButton);

  expect(correctButton).toHaveStyle(`background: ${defaultStyles.green}`);
});

test("prevent buttons from being clicked once a guess has been made", async () => {
  render(<Game />);
  const guessButtons = await screen.findAllByRole("button", { name: "guess" });
  const correctButton = guessButtons[0];
  const incorrectButton = guessButtons[1];
  fireEvent.click(incorrectButton);
  fireEvent.click(correctButton);
  expect(incorrectButton).toHaveStyle(`background: ${defaultStyles.red}`);
});
