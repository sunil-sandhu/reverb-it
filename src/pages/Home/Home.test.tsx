import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "./Home";

test("renders without crashing", () => {
  const { baseElement } = render(<Home />);
  expect(baseElement).toBeDefined();
});

test("renders a play button", () => {
  render(<Home />);
  const button = screen.getByRole("button", { name: /play/i });
  expect(button).toBeInTheDocument();
});

test("renders a progress button", () => {
  render(<Home />);
  const button = screen.getByRole("button", { name: /progress/i });
  expect(button).toBeInTheDocument();
});
