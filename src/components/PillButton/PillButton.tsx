import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClickFunc?: any;
  title: string;
}

const StyledButton = styled.button`
  width: 50%;
  padding: 7px;
  border-radius: 10px;
  background: white;
  color: black;
  font-size: 0.9rem;
  font-family: Helvetica;
  font-weight: bold;
  border: 1px solid black;
  letter-spacing: -1px;
  margin: 0 auto;
`;

const PillButton = ({ onClickFunc, title }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickFunc} aria-label={title}>
      {title}
    </StyledButton>
  );
};

export default PillButton;
