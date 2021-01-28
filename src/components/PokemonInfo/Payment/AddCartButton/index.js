import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useCartContext } from "../../../../contexts";
import * as S from "./styles";

const AddCartButton = ({ pokemon }) => {
  const history = useHistory();
  const { addPokemonToCart } = useCartContext();

  const handleClick = (event) => {
    event.preventDefault();

    addPokemonToCart(pokemon);
    history.push("/carrinho");
  };

  if (!pokemon) return null;
  return (
    <S.Container onClick={(e) => handleClick(e)}>
      <S.Icon className='fas fa-shopping-cart' />
      <S.Title>Comprar</S.Title>
    </S.Container>
  );
};

AddCartButton.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default AddCartButton;
