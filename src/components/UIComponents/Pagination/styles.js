import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.i`
  margin: 0 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: #f5f5f5;
  }
`;
