import React from "react";
import NotificationProvider from "./NotificationProvider";
import CurrentPokemonTypeProvider from "./CurrentPokemonTypeProvider";

const Providers = ({ children }) => {
  return (
    <NotificationProvider>
      <CurrentPokemonTypeProvider>{children}</CurrentPokemonTypeProvider>
    </NotificationProvider>
  );
};

export default Providers;
