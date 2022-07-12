import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Input = () => {
  return (
    <StyledInputWrapper>
      <StyleInput placeholder="Insert your comment" />
      <StyleSeparator />
      <Button>Save comments</Button>
    </StyledInputWrapper>
  );
};

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #467ebf;
  border-radius: 6px;
  padding: 16px;
  min-height: 20px;
`;

const StyleInput = styled.input`
  /* padding-bottom: 16px; */
  color: #000;
  border: none;
  outline: none;
`;

const StyleSeparator = styled.hr`
  /* color: #ccc;
  background-color: #fafafa; */
  border: 1px solid #d7d7d7;
`;
