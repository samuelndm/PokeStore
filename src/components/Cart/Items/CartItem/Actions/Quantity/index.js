import React from "react";
import PropTypes from "prop-types";
import { useCartContext } from "../../../../../../contexts";
import * as S from "./styles";

const Quantity = ({ pokemon }) => {
  const { updatePokemonFromCart } = useCartContext();

  const handleQuantityChange = (event) => {
    // event.preventDefault();

    const newPokemon = { ...pokemon, qtd: parseInt(event?.target?.value) || 1 };
    updatePokemonFromCart(newPokemon);
  };

  return (
    <S.Container>
      <S.Input
        data-testid='inputId'
        type='number'
        min={1}
        defaultValue={pokemon?.qtd || 1}
        required
        onChange={(e) => handleQuantityChange(e)}
      />
    </S.Container>
  );
};

Quantity.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Quantity;
