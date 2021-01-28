import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import HP from "./HP";
import Height from "./Height";
import Weight from "./Weight";

const Stats = ({ pokemon }) => {
  return (
    <S.Container>
      <HP stats={pokemon.stats} />

      <S.Divisor />
      <Height height={pokemon.height} />

      <S.Divisor />
      <Weight weight={pokemon.weight} />
    </S.Container>
  );
};

Stats.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Stats;
