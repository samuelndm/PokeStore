import styled from "styled-components";

export const Container = styled.div``;

export const Input = styled.input`
  padding: 0 0 0 13px;
  width: 50px;
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  font-size: 16px;
  outline: 0 !important;

  &:focus {
    border-color: hsl(0, 0%, 70%);
  }
`;
