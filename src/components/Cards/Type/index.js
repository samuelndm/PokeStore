import React from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonTypeContext } from "../../../contexts";
import placeholder from "../../../assets/images/placeholder.jpg";
import * as S from "./styles";

const Type = ({ type }) => {
  const { setCurrentPokemonType } = useCurrentPokemonTypeContext();

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPokemonType(type);
  };

  return (
    <S.Container onClick={(e) => handleClick(e)}>
      <S.Header backgroundColor={type?.color} />

      <S.Image
        color={type?.color}
        src={type?.image?.url || placeholder}
        alt='imagem de um pokemon'
      />

      <S.Body>
        <S.Name>{type?.name?.pt_br || ""}</S.Name>
      </S.Body>
    </S.Container>
  );
};

Type.propTypes = {
  type: PropTypes.object.isRequired,
};

export default Type;
