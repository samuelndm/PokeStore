import React from "react";
import NotificationProvider from "./NotificationProvider";
import ModalProvider from "./ModalProvider";
import CurrentPokemonTypeProvider from "./CurrentPokemonTypeProvider";
import CartProvider from "./CartProvider";

const Providers = ({ children }) => {
  return (
    <NotificationProvider>
      <ModalProvider>
        <CartProvider>
          <CurrentPokemonTypeProvider>{children}</CurrentPokemonTypeProvider>
        </CartProvider>
      </ModalProvider>
    </NotificationProvider>
  );
};

export default Providers;
