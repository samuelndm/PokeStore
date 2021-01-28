import styled from "styled-components";

export const Container = styled.button`
  padding: 14px 10px;
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  border-radius: 5px;
  background-color: var(--current-type-color);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px;
  text-transform: none;
  cursor: pointer;

  font-size: 22px;
  color: #fff;

  & > * {
    margin: 0 5px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.i``;

export const Title = styled.span`
  text-align: center;
`;
