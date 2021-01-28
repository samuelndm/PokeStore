import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: var(--navbar-height);
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${"var(--current-type-color)" || "#333"};
  box-shadow: 3px 3px 14px -9px rgba(0, 0, 0, 0.51);
`;

export const Content = styled(ResponsiveContainer)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
