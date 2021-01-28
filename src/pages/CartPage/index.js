import React, { useEffect } from "react";
import { useCurrentPokemonTypeContext } from "../../contexts";
import * as S from "./styles";
import * as C from "../../components";

const CartPage = () => {
  const { setCurrentPokemonType } = useCurrentPokemonTypeContext();

  useEffect(() => {
    setCurrentPokemonType(null);
  }, [setCurrentPokemonType]);

  return (
    <S.Container>
      <C.Cart />
    </S.Container>
  );
};

export default CartPage;
