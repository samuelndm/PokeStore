import styled from "styled-components";

export const Page = styled.div`
  margin: 0 2px;
  padding: 9px 15px;
  display: inline-block;
  color: ${({ isActive }) => (isActive ? "#fff" : "#212366")};
  font-size: 15px;
  line-height: inherit;
  background-color: ${({ isActive }) =>
    isActive ? "var(--primary-color)" : "transparent"};
  border: 0;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;

  }
`;
