import React from "react";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const HomePage = () => {
  return (
    <GS.PageContainer>
      <C.PokemonsList />
    </GS.PageContainer>
  );
};

export default HomePage;
