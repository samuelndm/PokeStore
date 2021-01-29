import React, { useEffect, useState } from "react";
import { handleCartResume } from "../../../utils/cartUtil";
import { useCartContext } from "../../../contexts";
import * as S from "./styles";
import Items from "./Items";

const MiniCart = () => {
  const { cart } = useCartContext();
  const [resume, setResume] = useState({});
  const [openItems, setOpenItems] = useState(false);

  useEffect(() => {
    setResume(handleCartResume(cart));
  }, [cart]);

  return (
    <>
      <S.Container
        openItems={openItems}
        onClick={(e) => setOpenItems((prev) => !prev)}
      >
        <S.Icon className='fas fa-shopping-cart' />
        <S.Quantity>{resume.qtd || 0}</S.Quantity>
        <Items cart={cart} resume={resume} />
      </S.Container>

      <S.DarkBackground
        openItems={openItems}
        onClick={(e) => setOpenItems((prev) => !prev)}
      />
    </>
  );
};

export default MiniCart;
