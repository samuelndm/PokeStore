import React from "react";
import { useCurrentPokemonTypeContext } from "../../../contexts";
import * as S from "./styles";
import * as UI from "../../UIComponents";
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  const { currentPokemonType } = useCurrentPokemonTypeContext();

  return (
    <S.Container>
      <UI.LinkHandler
        url={
          currentPokemonType?.name?.en_us
            ? `/tipo/${currentPokemonType?.name?.en_us}`
            : "/"
        }
        key={currentPokemonType?.name?.en_us}
      >
        <S.Image src={logo} alt='logo do site' />
      </UI.LinkHandler>
    </S.Container>
  );
};

export default Logo;
