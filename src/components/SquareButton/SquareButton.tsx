import React from "react";
import styled from "styled-components";
import { defaultStyles } from "../../config/defaultStyles";

type Color = "red" | "green";

interface ButtonProps {
  onClickFunc?: any;
  title: string;
  color?: Color;
  guessMade: boolean;
  name?: string;
}

interface StyledButtonProps {
  color?: Color;
  guessMade: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: calc(50% - 10px);
  padding: 5px;
  border-radius: 10px;
  background: ${(props) =>
    props.color === "red"
      ? defaultStyles.red
      : props.color === "green"
      ? defaultStyles.green
      : "white"};
  border: ${(props) => (props.guessMade ? "none" : "1px solid black")};
  color: black;
  font-size: 1.1rem;
  font-family: Helvetica;
  font-weight: bold;
  letter-spacing: -1px;
  height: 120px;
  margin: 5px;
  transition: all 200ms;
`;

const SquareButton = ({ onClickFunc, title, color, guessMade, name = "guess" }: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClickFunc}
      aria-label={name}
      color={color}
      guessMade={guessMade}
      disabled={guessMade}>
      {title}
    </StyledButton>
  );
};

export default SquareButton;
