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
  margin: 6px auto;
  width: 100%;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5rem;
  font-family: Helvetica;
  font-weight: 600;
  border: 1px solid black;
  letter-spacing: -1px;
`;

const Button = ({ onClickFunc, title, type }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickFunc} aria-label={title}>
      {title}
    </StyledButton>
  );
};

export default Button;
