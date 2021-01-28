import React from "react";
import * as S from "./styles";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <Search />
        <Menu />
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
