import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import { useCartContext } from "../../../contexts";

const MiniCart = () => {
  const { cart } = useCartContext();
  return <S.Container></S.Container>;
};

MiniCart.propTypes = {};

export default MiniCart;
