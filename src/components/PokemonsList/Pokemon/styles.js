import styled from "styled-components";

export const Container = styled.div`
  width: 25%;

  @media screen and (max-width: 1199px) {
    width: 33%;
  }

  @media screen and (max-width: 991px) {
    width: 50%;
  }

  @media screen and (max-width: 586px) {
    width: 100%;
  }
`;
