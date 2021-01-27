import React from "react";
import * as S from "./styles";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";

const menu = [{ id: 1, url: "/lista-tipos", title: "Lista de tipos" }];

const Menu = () => {
  return (
    <S.Container>
      <DefaultMenu menu={menu} />
      <MobileMenu menu={menu} />
    </S.Container>
  );
};

export default Menu;
