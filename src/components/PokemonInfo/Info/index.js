import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import Images from "./Images";
import Details from "./Details";

const Info = ({ pokemon }) => {
  return (
    <S.Container>
      <Images sprites={pokemon?.sprites} />
      <Details pokemon={pokemon} />
    </S.Container>
  );
};

Info.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Info;
