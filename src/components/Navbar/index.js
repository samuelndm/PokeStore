import React from "react";
import { useCurrentPokemonTypeContext } from "../../contexts";
import * as S from "./styles";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const { currentPokemonType } = useCurrentPokemonTypeContext();

  return (
    <S.Container backgroundColor={currentPokemonType.color}>
      <S.Content>
        <Logo />
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
