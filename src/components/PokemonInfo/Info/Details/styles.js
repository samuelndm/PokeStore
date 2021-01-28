import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin: 0 0 50px;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 30px 0;
  }
`;
