import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    if (item) {
      setCart((cart) => [...cart, item]);
    }
  };

  const removeCartItem = (itemRemoved) => {
    const newCart = cart.filter((item) => item?.id !== itemRemoved?.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element,
};

export default CartProvider;
