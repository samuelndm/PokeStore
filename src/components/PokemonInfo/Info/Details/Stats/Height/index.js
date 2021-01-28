import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles";

const Height = ({ height }) => {
  return (
    <S.Stats>
      <S.StatsLabel>ALTURA</S.StatsLabel>
      <S.StatsContent>{`${(height || 0) / 10} m`}</S.StatsContent>
    </S.Stats>
  );
};

Height.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Height;
