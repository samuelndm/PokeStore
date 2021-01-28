import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../../utils";
import { handlePokemonPrice } from "../../../../utils/PokemonInfoUtil";
import * as S from "./styles";

const Price = ({ pokemon }) => {
  return (
    <S.Container>
      {formatCurrency(handlePokemonPrice(pokemon?.stats))}
    </S.Container>
  );
};

Price.propTypes = {
  pokemon: PropTypes.object,
};

export default Price;
