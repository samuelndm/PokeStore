import React, { createContext, useContext, useState } from "react";

const CurrentPokemonTypeContext = createContext();

export const useCurrentPokemonTypeContext = () =>
  useContext(CurrentPokemonTypeContext);

const CurrentPokemonTypeProvider = ({ children }) => {
  const [currentPokemonType, setCurrentPokemonType] = useState();

  return (
    <CurrentPokemonTypeContext.Provider
      value={{ currentPokemonType, setCurrentPokemonType }}
    >
      {children}
    </CurrentPokemonTypeContext.Provider>
  );
};

export default CurrentPokemonTypeProvider;
