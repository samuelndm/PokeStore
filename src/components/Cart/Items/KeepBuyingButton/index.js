import React from "react";
import { useHistory } from "react-router-dom";
import { useCurrentPokemonTypeContext } from "../../../../contexts";
import * as S from "./styles";

const KeepBuyingButton = () => {
  const { currentPokemonType } = useCurrentPokemonTypeContext();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    if (currentPokemonType) {
      history.push(`/tipo/${currentPokemonType.name.en_us}`);
    } else {
      history.push(`/lista-tipos`);
    }
  };

  return (
    <S.Container onClick={(e) => handleClick(e)}>
      <S.Icon className='fas fa-caret-left' />
      <S.Title>Continuar comprando</S.Title>
    </S.Container>
  );
};

export default KeepBuyingButton;
