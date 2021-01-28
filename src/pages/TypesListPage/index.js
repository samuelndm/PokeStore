import React, { useEffect } from "react";
import { useCurrentPokemonTypeContext } from "../../contexts";
import { POKEMON_TYPES_LIST } from "../../utils/constants";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const TypesListPage = () => {
  const { setCurrentPokemonType } = useCurrentPokemonTypeContext();

  useEffect(() => {
    setCurrentPokemonType(null);
  }, [setCurrentPokemonType]);

  return (
    <GS.PageContainer>
      <C.TypesList types={POKEMON_TYPES_LIST} />
    </GS.PageContainer>
  );
};

export default TypesListPage;
