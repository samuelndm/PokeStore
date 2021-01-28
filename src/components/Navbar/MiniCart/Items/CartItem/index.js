import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPokemonTypeByName } from "../../../../../utils/PokemonListUtil";
import * as S from "./styles";
import Thumbnail from "./Thumbnail";
import Title from "./Title";
import Price from "./Price";

const CartItem = ({ pokemon }) => {
  const [type, setType] = useState({});

  useEffect(() => {
    const pokemonType = getPokemonTypeByName(pokemon?.types?.[0]?.type?.name);
    setType(pokemonType);
  }, [pokemon]);

  if (!pokemon) return null;
  return (
    <S.Container color={type?.color}>
      <S.Quantity>{pokemon.qtd || 1}</S.Quantity>
      <Thumbnail sprites={pokemon.sprites} pokemonId={pokemon.id} />
      <Title title={pokemon.name} pokemonId={pokemon.id} />
      <Price pokemon={pokemon} />
    </S.Container>
  );
};

CartItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default CartItem;
