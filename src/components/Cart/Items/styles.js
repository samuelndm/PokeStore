import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-height: 425px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
