import React, { useEffect, useState } from "react";
import { handleCartResume } from "../../../utils/CartUtil";
import { useCartContext } from "../../../contexts";
import * as S from "./styles";
import Items from "./Items";

const MiniCart = () => {
  const { cart } = useCartContext();
  const [resume, setResume] = useState({});

  useEffect(() => {
    setResume(handleCartResume(cart));
  }, [cart]);

  return (
    <S.Container>
      <S.Icon className='fas fa-shopping-cart' />
      <S.Quantity>{resume.qtd || 0}</S.Quantity>
      <Items cart={cart} resume={resume} />
    </S.Container>
  );
};

export default MiniCart;
