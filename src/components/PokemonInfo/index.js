import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Info from "./Info";
import Payment from "./Payment";

const PokemonInfo = ({ pokemon }) => {
  return (
    <S.Container>
      <Info pokemon={pokemon} />
      <Payment pokemon={pokemon} />
    </S.Container>
  );
};

PokemonInfo.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonInfo;
