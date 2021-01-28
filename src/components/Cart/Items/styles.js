import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-height: 425px;
  margin: 15px 5px;
  padding: 30px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 991px) {
    padding: 0;
    width: 100%;
    min-height: 0;
  }
`;
