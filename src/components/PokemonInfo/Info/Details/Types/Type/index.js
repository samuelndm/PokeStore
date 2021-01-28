import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPokemonTypeByName } from "../../../../../../utils/PokemonListUtil";
import * as S from "./styles";
import * as UI from "../../../../../UIComponents";

const Type = ({ type }) => {
  const [typeInfo, setTypeInfo] = useState({});

  useEffect(() => {
    const info = getPokemonTypeByName(type?.name);
    setTypeInfo(info || {});
  }, [type]);

  if (!type) return null;
  return (
    <UI.LinkHandler url={`/${type?.name}`} margin='0 10px'>
      <S.Container color={typeInfo?.color}>
        <S.Name>{typeInfo?.name?.pt_br || "Indisponível"}</S.Name>
      </S.Container>
    </UI.LinkHandler>
  );
};

Type.propTypes = {
  type: PropTypes.object.isRequired,
};
export default Type;
