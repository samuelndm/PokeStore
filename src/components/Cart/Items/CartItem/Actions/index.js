import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Quantity from "./Quantity";
import Remove from "./Remove";

const Actions = ({ pokemon }) => {
  if (!pokemon) return null;
  return (
    <S.Container>
      <Quantity pokemon={pokemon} />
      <Remove pokemonId={pokemon.id} />
    </S.Container>
  );
};

Actions.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Actions;
