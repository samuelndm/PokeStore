import React from "react";
import PropTypes from "prop-types";
import { useCartContext, useModalContext } from "../../../../contexts";
import * as S from "./styles";
import CompletedBuyModal from "./CompletedBuyModal";

const BuyPokemonsButton = () => {
  const { clearCart } = useCartContext();
  const { createModal } = useModalContext();

  const handleClick = (event) => {
    event.preventDefault();

    clearCart();
    createModal({ content: <CompletedBuyModal />, size: "md" });
  };

  return (
    <S.Container onClick={(e) => handleClick(e)}>
      <S.Icon className='fas fa-shopping-cart' />
      <S.Title>Finalizar Comprar</S.Title>
    </S.Container>
  );
};

BuyPokemonsButton.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default BuyPokemonsButton;
