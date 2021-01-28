import styled from "styled-components";

export const Container = styled.div`
  margin: 0 5px;
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > .cart-items {
    display: none;
  }

  &:hover {
    & > .cart-items {
      display: flex;
    }
  }
`;

export const Icon = styled.i`
  margin: 0 5px;
  color: #fff;
  font-size: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Quantity = styled.span`
  font-family: arial;
  color: #fff;
  font-size: 16px;
`;
