import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || "auto"};
  & a {
    all: unset;
    height: auto;
    width: ${({ width }) => width || "auto"};
    display: flex;
    align-items: center;
    justify-content: ${({ childrenPosition }) => {
      switch (childrenPosition) {
        case "left":
          return "flex-start";
        case "right":
          return "flex-end";
        default:
          return "center";
      }
    }};
    color: ${({ textColor }) => textColor || "#000"};
    font-size: 14px;
    cursor: pointer;
  }
`;

export const LinkAnchor = styled.a``;

export const Title = styled.p``;
