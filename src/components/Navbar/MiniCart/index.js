import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { handleCartResume } from "../../../utils/cartUtil";
import { useCartContext } from "../../../contexts";
import * as S from "./styles";
import Items from "./Items";

const MiniCart = () => {
  const history = useHistory();
  const { cart } = useCartContext();
  const [resume, setResume] = useState({});
  const [openItems, setOpenItems] = useState(false);
  const [isOnCartPage, setIsOnCartPage] = useState(true);

  useEffect(() => {
    setResume(handleCartResume(cart));
  }, [cart]);

  useEffect(() => {
    setIsOnCartPage(history?.location?.pathname?.includes("carrinho"));
  }, [history.location]);

  return (
    <S.Container
      openItems={openItems}
      isOnCartPage={isOnCartPage}
      onClick={(e) => setOpenItems((prev) => !prev)}
    >
      <S.Icon className='fas fa-shopping-cart' />
      <S.Quantity>{resume.qtd || 0}</S.Quantity>
      <Items cart={cart} resume={resume} />
    </S.Container>
  );
};

export default MiniCart;
