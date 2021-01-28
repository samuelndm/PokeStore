import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getEndpoint } from "../../../services/endpoints";
import * as S from "./styles";
import * as Card from "../../Cards";

const Pokemon = ({ pokemonEndpoint }) => {
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = async (pokemonEndpoint) => {
    try {
      const { data } = await getEndpoint(pokemonEndpoint);
      setPokemon(data || {});
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      pokemonEndpoint && loadPokemon(pokemonEndpoint);
    }, 1000);
  }, [pokemonEndpoint]);

  return (
    <S.Container>
      <Card.Pokemon pokemon={pokemon} />
    </S.Container>
  );
};

Pokemon.propTypes = {
  pokemonEndpoint: PropTypes.string.isRequired,
};

export default Pokemon;
