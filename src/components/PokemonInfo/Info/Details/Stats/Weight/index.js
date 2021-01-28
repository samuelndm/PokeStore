import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles";

const Weight = ({ weight }) => {
  return (
    <S.Stats>
      <S.StatsLabel>PESO</S.StatsLabel>
      <S.StatsContent>{`${(weight || 0) / 10} kg`}</S.StatsContent>
    </S.Stats>
  );
};

Weight.propTypes = {
  weight: PropTypes.number.isRequired,
};

export default Weight;
