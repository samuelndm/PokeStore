import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import * as UI from "../../../../../UIComponents";

const Title = ({ title, pokemonId }) => {
  const history = useHistory();
  const handleClick = (event) => {
    history.push(`/pokemon/${pokemonId}`);
  };

  return (
    <S.Container onClick={(e) => handleClick(e)}>{title || "*"}</S.Container>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  pokemonId: PropTypes.number.isRequired,
};

export default Title;
