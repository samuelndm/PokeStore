import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 70px auto 0;
  width: 100%;
  min-height: 425px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 575px) {
    margin: 10px auto 0;
  }
`;
