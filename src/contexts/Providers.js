import React from "react";
import NotificationProvider from "./NotificationProvider";
import CurrentPokemonTypeProvider from "./CurrentPokemonTypeProvider";
import CartProvider from "./CartProvider";

const Providers = ({ children }) => {
  return (
    <NotificationProvider>
      <CartProvider>
        <CurrentPokemonTypeProvider>{children}</CurrentPokemonTypeProvider>
      </CartProvider>
    </NotificationProvider>
  );
};

export default Providers;
