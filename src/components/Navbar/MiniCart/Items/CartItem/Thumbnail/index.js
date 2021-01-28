import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import placeholder from "../../../../../../assets/images/pokemon-placeholder.png";
import * as S from "./styles";

const Thumbnail = ({ sprites, pokemonId }) => {
  const history = useHistory();
  const handleClick = (event) => {
    history.push(`/pokemon/${pokemonId}`);
  };

  return (
    <S.Container
      src={
        sprites?.front_default ||
        sprites?.other?.["official-artwork"]?.front_default ||
        placeholder
      }
      alt='imagem de um pokemon'
      loading='lazy'
      onClick={(e) => handleClick(e)}
    />
  );
};

Thumbnail.propTypes = {
  sprites: PropTypes.object.isRequired,
  pokemonId: PropTypes.number.isRequired,
};

export default Thumbnail;
