import React from "react";
import { useCartContext } from "../../../../../../contexts";
import PropTypes from "prop-types";
import * as S from "./styles";

const Remove = ({ pokemonId }) => {
  const { removePokemonFromCart } = useCartContext();

  const handleClick = (event) => {
    event.preventDefault();

    const hasConfirmed = window.confirm("Tem certeza que deseja remover?");
    hasConfirmed && removePokemonFromCart(pokemonId);
  };

  return <S.Container onClick={(e) => handleClick(e)}>Remover</S.Container>;
};

Remove.propTypes = {
  pokemonId: PropTypes.number.isRequired,
};

export default Remove;
