import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export const Icon = styled.i`
  padding: 20px;
  font-size: 20px;
  color: ${({ isVisible }) => (isVisible ? "var(--blue-color)" : "#fff")};
  background-color: ${({ isVisible }) =>
    isVisible ? "var(--yellow-color)" : "transparent"};
  cursor: pointer;
  border: ${({ isVisible }) =>
    isVisible ? "1px solid var(--blue-color)" : "none"};
  border-radius: 50%;
`;

export const Menu = styled.div`
  padding: 10px 20px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(200%)"};
  transition: transform 0.5s ease-in-out;
  background-color: var(--current-type-color) || "#c8c8c8"};
`;
