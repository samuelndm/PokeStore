export const validatePokemon = (pokemon) => {
  if (!pokemon) {
    throw new Error("Pokémon inválido");
  }
};

export const validatePokemonId = (id) => {
  if (!id || id < 1) {
    throw new Error("Id inválido");
  }
};
