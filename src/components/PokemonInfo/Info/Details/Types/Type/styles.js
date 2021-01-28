import styled from "styled-components";

export const Container = styled.div`
  width: 99px;
  height: 32px;
  background: ${({ color }) => color || "#000"};
  border-radius: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 575px) {
    margin: 10px 0;
  }
`;

export const Name = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;
