import React from "react";
import styled from "styled-components";

enum Color {
  Red,
  Green,
  Grey,
}

interface ButtonProps {
  onClickFunc?: any;
  title: string;
  type?: Color;
}

const StyledButton = styled.button`
  width: calc(50% - 10px);
  padding: 5px;
  border-radius: 10px;
  background: white;
  color: black;
  font-size: 1.1rem;
  font-family: Helvetica;
  font-weight: bold;
  border: 1px solid black;
  letter-spacing: -1px;
  height: 120px;
  margin: 5px;
`;

const SquareButton = ({ onClickFunc, title, type }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickFunc} aria-label={title}>
      {title}
    </StyledButton>
  );
};

export default SquareButton;
