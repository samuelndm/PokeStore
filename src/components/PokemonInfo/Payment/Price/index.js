import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../../utils";
import { handlePokemonPrice } from "../../../../utils/PokemonInfoUtil";
import * as S from "./styles";

const Price = ({ pokemon }) => {
  return (
    <S.Container>
      <S.Value>{formatCurrency(handlePokemonPrice(pokemon?.stats))}</S.Value>

      <S.Span>
        em até 12x sem juros no <S.Strong>Pokecard</S.Strong>
      </S.Span>
    </S.Container>
  );
};

Price.propTypes = {
  pokemon: PropTypes.object,
};

export default Price;
