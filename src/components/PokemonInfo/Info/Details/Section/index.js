import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Section = ({ title }) => {
  return (
    <S.Container>
      <S.Line />
      <S.Title>{title || ""}</S.Title>
      <S.Line />
    </S.Container>
  );
};

Section.proTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
