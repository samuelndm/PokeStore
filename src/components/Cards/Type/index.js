import React from "react";
import PropTypes from "prop-types";
import placeholder from "../../../assets/images/placeholder.jpg";
import * as S from "./styles";
import * as UI from "../../UIComponents";

const Type = ({ type }) => {
  return (
    <UI.LinkHandler url={`/${type?.name?.pt_br?.toLowerCase()}`}>
      <S.Container>
        <S.Header backgroundColor={type?.color} />

        <S.Image
          color={type?.color}
          src={type?.image?.url || placeholder}
          alt='imagem de um pokemon'
        />

        <S.Body>
          <S.Name>{type?.name?.pt_br || ""}</S.Name>
        </S.Body>
      </S.Container>
    </UI.LinkHandler>
  );
};

Type.propTypes = {
  type: PropTypes.object.isRequired,
};

export default Type;
