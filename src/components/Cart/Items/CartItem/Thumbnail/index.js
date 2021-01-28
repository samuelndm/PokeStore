import React from "react";
import PropTypes from "prop-types";
import placeholder from "../../../../../assets/images/pokemon-placeholder.png";
import * as S from "./styles";
import * as UI from "../../../../UIComponents";

const Thumbnail = ({ sprites, pokemonId }) => {
  return (
    <UI.LinkHandler url={`/pokemon/${pokemonId}`}>
      <S.Container>
        <S.Image
          src={
            sprites?.front_default ||
            sprites?.other?.["official-artwork"]?.front_default ||
            placeholder
          }
          alt='imagem de um pokemon'
          loading='lazy'
        />
      </S.Container>
    </UI.LinkHandler>
  );
};

Thumbnail.propTypes = {
  sprites: PropTypes.object.isRequired,
  pokemonId: PropTypes.number.isRequired,
};

export default Thumbnail;
