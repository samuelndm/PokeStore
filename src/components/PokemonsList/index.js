import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Pokemon from "./Pokemon";

const PokemonsList = ({ pokemons }) => {
  const [pokemonsEndpoint, setPokemonsEndpoint] = useState([]);

  useEffect(() => {
    const endpoints = pokemons.map(({ url }) => url);
    setPokemonsEndpoint(endpoints);
  }, [pokemons]);

  return (
    <S.Container>
      <S.Pokemons>
        {pokemonsEndpoint?.map((endpoint) => (
          <Pokemon
            pokemonEndpoint={endpoint}
            key={`pokemon-endpoint-${endpoint}`}
          />
        ))}
      </S.Pokemons>
    </S.Container>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PokemonsList;
