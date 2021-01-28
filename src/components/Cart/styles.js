import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 70px auto 0;
  width: 100%;
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 991px) {
    margin: 0 auto 0;
  }
`;

export const EmptyCart = styled.h1`
  margin: auto;
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
