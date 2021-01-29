import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../../../../utils";
import { handlePokemonPrice } from "../../../../../../utils/pokemonInfoUtil";
import * as S from "./styles";

const Price = ({ pokemon }) => {
  return (
    <S.Container>
      <S.Value>{formatCurrency(handlePokemonPrice(pokemon))}</S.Value>
    </S.Container>
  );
};

Price.propTypes = {
  pokemon: PropTypes.object,
};

export default Price;
