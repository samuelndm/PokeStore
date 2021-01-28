import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Price from "./Price";
import AddCartButton from "./AddCartButton";
import ReceiveDate from "./ReceiveDate";

const Payment = ({ pokemon }) => {
  return (
    <S.Container>
      <Price pokemon={pokemon} />
      <S.Divisor />
      <ReceiveDate />
      <S.Divisor />
      <AddCartButton pokemon={pokemon} />
    </S.Container>
  );
};

Payment.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Payment;
