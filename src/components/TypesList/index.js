import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as Cards from "../Cards";

const TypesList = ({ types }) => {
  return (
    <S.Container>
      {types?.map((type) => (
        <Cards.Type type={type} key={`cards.type-${type.id}`} />
      ))}
    </S.Container>
  );
};

TypesList.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TypesList;
