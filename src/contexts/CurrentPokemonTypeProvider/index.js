import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CurrentPokemonTypeContext = createContext();

export const useCurrentPokemonTypeContext = () =>
  useContext(CurrentPokemonTypeContext);

const CurrentPokemonTypeProvider = ({ children }) => {
  const [currentPokemonType, setCurrentPokemonType] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--current-type-color",
      currentPokemonType?.color || "#3866B3"
    );
  }, [currentPokemonType]);

  return (
    <CurrentPokemonTypeContext.Provider
      value={{ currentPokemonType, setCurrentPokemonType }}
    >
      {children}
    </CurrentPokemonTypeContext.Provider>
  );
};

CurrentPokemonTypeProvider.propTypes = {
  children: PropTypes.element,
};

export default CurrentPokemonTypeProvider;
