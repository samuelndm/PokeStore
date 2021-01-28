import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as CartUtil from "../../utils/CartProviderUtil";
import { useNotificationContext } from "../NotificationProvider";
import { validatePokemon, validatePokemonId } from "../../utils/validations";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStorage = CartUtil.getCartStorage();
    setCart(cartStorage || []);
  }, []);

  const addPokemonToCart = (pokemon) => {
    try {
      validatePokemon(pokemon);

      const newCart = CartUtil.handleAddPokemon(cart, pokemon);
      setCart(newCart);
      CartUtil.updateCartStorage(newCart);
    } catch (err) {
      console.error(err);

      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message: "Ocorreu um erro ao adicionar o pokémon no carrinho!",
      });
    }
  };

  const removePokemonFromCart = (pokemonId) => {
    try {
      validatePokemonId(pokemonId);

      const newCart = CartUtil.handleRemovePokemon(cart, pokemonId);
      setCart([...newCart]);
      CartUtil.updateCartStorage(newCart);

      createNotification({
        type: NOTIFICATION_TYPES.INFO,
        message: "Pokémon removido com sucesso!",
      });
    } catch (err) {
      console.error(err);

      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message: "Ocorreu um erro ao remover o pokémon do carrinho!",
      });
    }
  };

  const updatePokemonFromCart = (updatedPokemon) => {
    try {
      validatePokemon(updatedPokemon);

      const newCart = CartUtil.handleUpdatePokemon(cart, updatedPokemon);
      setCart([...newCart]);
      CartUtil.updateCartStorage(newCart);
    } catch (err) {
      console.error(err);
    }
  };

  const clearCart = () => {
    setCart([]);
    CartUtil.updateCartStorage([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addPokemonToCart,
        removePokemonFromCart,
        updatePokemonFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element,
};

export default CartProvider;
