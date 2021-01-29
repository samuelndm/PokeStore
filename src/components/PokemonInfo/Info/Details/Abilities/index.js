import React from "react";
import PropTypes from "prop-types";
import { concatenateAbilities } from "../../../../../utils/pokemonInfoUtil";
import * as S from "./styles";
import Section from "../Section";

const Abilities = ({ abilities }) => {
  return (
    <S.Container>
      <Section title='Habilidades' />

      <S.Abilities>{concatenateAbilities(abilities) || ""}</S.Abilities>
    </S.Container>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Abilities;
