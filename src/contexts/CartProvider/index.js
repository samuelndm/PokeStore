import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addPokemonToCart = (pokemon) => {
    if (pokemon) {
      setCart((cart) => [...cart, pokemon]);
    }
  };

  const removePokemonFromCart = (pokemonRemoved) => {
    const newCart = cart.filter(
      (pokemon) => pokemon?.id !== pokemonRemoved?.id
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addPokemonToCart, removePokemonFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element,
};

export default CartProvider;
