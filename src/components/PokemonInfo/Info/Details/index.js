import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import SkeletonDetails from "./SkeletonDetails";
import Name from "./Name";
import Stats from "./Stats";
import Types from "./Types";
import Abilities from "./Abilities";

const Details = ({ pokemon }) => {
  return !pokemon ? (
    <SkeletonDetails />
  ) : (
    <S.Container>
      <Name name={pokemon.name} />

      <Stats pokemon={pokemon} />

      <Types types={pokemon.types} />

      <Abilities abilities={pokemon.abilities} />
    </S.Container>
  );
};

Details.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Details;
