import React from "react";
import PropTypes from "prop-types";
import placeholder from "../../../assets/images/pokemon-placeholder.png";
import SkeletonCard from "./SkeletonCard";
import * as S from "./styles";
import * as UI from "../../UIComponents";

const Pokemon = ({ pokemon }) => {
  return !pokemon ? (
    <SkeletonCard />
  ) : (
    <UI.LinkHandler url={`/pokemon/${pokemon?.id}`}>
      <S.Container>
        <S.Header />

        <S.Image
          src={
            pokemon?.sprites?.front_default ||
            pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
            placeholder
          }
          alt='imagem de um pokemon'
          loading='lazy'
        />

        <S.Body>
          <S.Name>{pokemon?.name || ""}</S.Name>
        </S.Body>
      </S.Container>
    </UI.LinkHandler>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object,
};

export default Pokemon;
