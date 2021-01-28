import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/styles/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 70px 0 50px;
  width: 100%;
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Pokemons = styled.div`
  min-height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const NotFound = styled.h2`
  margin: auto;
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
