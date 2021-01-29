import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 70px 0 50px;
  width: 100%;
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 587px) {
    &:after {
      content: "";
      flex: auto;
    }
  }

  @media screen and (max-width: 586px) {
    justify-content: space-around;
  }
`;
