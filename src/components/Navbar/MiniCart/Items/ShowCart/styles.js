import styled from "styled-components";

export const Container = styled.button`
  margin: 15px 0 0;
  padding: 10px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0px;
  border-radius: 5px;
  background-color: var(--blue-color);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px;
  text-transform: none;
  cursor: pointer;

  font-size: 22px;
  color: #fff;

  & > * {
    margin: 0 5px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-size: 16px;

  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
`;
