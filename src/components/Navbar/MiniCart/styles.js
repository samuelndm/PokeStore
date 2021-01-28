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

  @media screen and (max-width: 575px) {
    position: fixed;
    top: calc(var(--navbar-height) + 20px);
    right: 10px;
  }
`;

export const Icon = styled.i`
  margin: 0 5px;
  color: #fff;
  font-size: 20px;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 575px) {
    color: var(--blue-color);
    font-size: 30px;
  }
`;

export const Quantity = styled.span`
  font-family: arial;
  color: #fff;
  font-size: 16px;

  @media screen and (max-width: 575px) {
    color: var(--blue-color);
  }
`;
