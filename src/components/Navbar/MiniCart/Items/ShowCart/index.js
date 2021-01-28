import React from "react";
import * as S from "./styles";
import * as UI from "../../../../UIComponents";

const ShowCart = () => {
  return (
    <UI.LinkHandler url='/carrinho' width='100%'>
      <S.Container>
        <S.Title>Ver carrinho</S.Title>
      </S.Container>
    </UI.LinkHandler>
  );
};

export default ShowCart;
