import React from "react";
import * as S from "./styles";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
