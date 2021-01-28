import React from "react";
import { useCartContext } from "../../contexts";
import * as S from "./styles";
import Items from "./Items";
import Resume from "./Resume";

const Cart = () => {
  const { cart } = useCartContext();

  return !cart?.length ? (
    <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
  ) : (
    <S.Container>
      <Items cart={cart} />
      <Resume cart={cart} />
    </S.Container>
  );
};

export default Cart;
