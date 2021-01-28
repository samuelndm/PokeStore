import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const AddCartButton = ({ pokemon }) => {
  if (!pokemon) return null;
  return <S.Container></S.Container>;
};

AddCartButton.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default AddCartButton;
