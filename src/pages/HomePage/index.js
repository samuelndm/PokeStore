import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const HomePage = () => {
  const history = useHistory();
  const [searchedPokemon, setSearchedPokemon] = useState("");

  useEffect(() => {
    if (history.location.search) {
      const urlParams = new URLSearchParams(history.location.search);
      const searchedPokemonParam = urlParams.get("searched_pokemon");

      setSearchedPokemon(searchedPokemonParam || "");
    }
  }, [history.location]);

  return (
    <GS.PageContainer>
      <C.PokemonsList searchedPokemon={searchedPokemon} />
    </GS.PageContainer>
  );
};

export default HomePage;
