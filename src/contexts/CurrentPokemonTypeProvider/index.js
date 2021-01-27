import React, { createContext, useContext, useState } from "react";
import { POKEMON_TYPES, POKEMON_TYPES_LIST } from "../../utils/constants";

const CurrentPokemonTypeContext = createContext();

export const useCurrentPokemonTypeContext = () =>
  useContext(CurrentPokemonTypeContext);

const CurrentPokemonTypeProvider = ({ children }) => {
  const DEFAULT_TYPE = POKEMON_TYPES.GRASS;
  const [currentPokemonType, setCurrentPokemonType] = useState(
    POKEMON_TYPES_LIST[0]
  );

  return (
    <CurrentPokemonTypeContext.Provider
      value={{ currentPokemonType, setCurrentPokemonType }}
    >
      {children}
    </CurrentPokemonTypeContext.Provider>
  );
};

export default CurrentPokemonTypeProvider;
