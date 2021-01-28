import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Price from "./Price";

const Payment = ({ pokemon }) => {
  return (
    <S.Container>
      <Price pokemon={pokemon} />
    </S.Container>
  );
};

Payment.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Payment;
