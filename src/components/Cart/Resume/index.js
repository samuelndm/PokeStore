import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { handleCartResume } from "../../../utils/cartUtil";
import * as S from "./styles";
import Total from "./Total";
import BuyPokemonsButton from "./BuyPokemonsButton";

const Resume = ({ cart }) => {
  const [resume, setResume] = useState({});

  useEffect(() => {
    setResume(handleCartResume(cart));
  }, [cart]);

  return (
    <S.Container>
      <S.Title>Resumo do pedido</S.Title>

      <S.Divisor />
      <S.Quantity>
        {`${resume.qtd} ${resume.qtd > 1 ? "pokemons" : "pokémon"}`}
      </S.Quantity>

      <S.Divisor />
      <Total total={resume.totalPrice} />

      <S.Divisor />
      <BuyPokemonsButton />
    </S.Container>
  );
};

Resume.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Resume;
