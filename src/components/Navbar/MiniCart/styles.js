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

  @media screen and (min-width: 992px) {
    &:hover {
      & > .cart-items {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 991px) {
    position: fixed;
    top: calc(var(--navbar-height) + 20px);
    right: 10px;

    display: ${({ isOnCartPage }) => (isOnCartPage ? "none" : "flex")};

    & > .cart-items {
      display: ${({ openItems }) => (openItems ? "flex" : "none")};
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

  @media screen and (max-width: 991px) {
    color: var(--blue-color);
    font-size: 32px;
  }
`;

export const Quantity = styled.span`
  font-family: arial;
  color: #fff;
  font-size: 16px;

  @media screen and (max-width: 991px) {
    color: var(--blue-color);
  }
`;
