import React from "react";
import { POKEMON_TYPES_LIST } from "../../utils/constants";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const TypesListPage = () => {
  return (
    <GS.PageContainer>
      <C.TypesList types={POKEMON_TYPES_LIST} />
    </GS.PageContainer>
  );
};

export default TypesListPage;
