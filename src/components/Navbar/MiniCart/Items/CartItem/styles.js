import styled from "styled-components";

export const Container = styled.div`
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ color }) => color || "#333"};

  & > * {
    margin: 0 0 5px;
    width: 100% !important;
  }
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
