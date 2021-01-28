import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 10px;
  width: 100%;
  background-color: var(--yellow-color);
  border-radius: 6px;

  & a {
    color: var(--blue-color);
    padding: 15px 20px;
    font-size: 14px;
    font-weight: 700;
  }

  &:hover {
    border: 2px solid var(--blue-color);
  }
`;

export const Icon = styled.i``;
