import React from "react";
import * as S from "./styles";
import Logo from "./Logo";
import Search from "./Search";
import MiniCart from "./MiniCart";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <Search />
        <MiniCart />
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
