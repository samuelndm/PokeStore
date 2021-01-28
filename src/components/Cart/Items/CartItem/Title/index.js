import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "../../../../UIComponents";

const Title = ({ title, pokemonId }) => {
  return (
    <UI.LinkHandler url={`pokemon/${pokemonId}`}>
      <S.Container>{title || "*"}</S.Container>
    </UI.LinkHandler>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  pokemonId: PropTypes.number.isRequired,
};

export default Title;
