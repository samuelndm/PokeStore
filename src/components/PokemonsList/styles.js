import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 70px 0 50px;
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Pokemons = styled.div`
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
