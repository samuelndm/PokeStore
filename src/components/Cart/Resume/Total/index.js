import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../../utils";
import * as S from "./styles";

const Total = ({ total }) => {
  return (
    <S.Container>
      <S.Title>Total</S.Title>
      <S.Price>{formatCurrency(total || 0)}</S.Price>
    </S.Container>
  );
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
