import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 10px;
  padding: 30px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  border-radius: 5px;

  @media screen and (max-width: 991px) {
    width: 100%;
  }

  @media screen and (max-width: 575px) {
    padding: 5px 0;
  }
`;
