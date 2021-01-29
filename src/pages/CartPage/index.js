import React, { useEffect } from "react";
import { ScrollToTop } from "../../utils";
import * as S from "./styles";
import * as C from "../../components";

const CartPage = () => {
  useEffect(() => {
    ScrollToTop();
  }, []);

  return (
    <S.Container>
      <C.Cart />
    </S.Container>
  );
};

export default CartPage;
