import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import CartItem from "./CartItem";
import Total from "./Total";
import ShowCart from "./ShowCart";

const Items = ({ cart, resume }) => {
  return (
    <S.Container className='cart-items'>
      {cart.map((pokemon) => (
        <CartItem pokemon={pokemon} key={`cartItem-${pokemon.id}`} />
      ))}

      <Total total={resume.totalPrice} />
      <ShowCart />
    </S.Container>
  );
};

Items.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  resume: PropTypes.object.isRequired,
};

export default Items;
