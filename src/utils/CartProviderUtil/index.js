import { handlePokemonPrice } from "../pokemonInfoUtil";
const storageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY;

export const getCartStorage = () => {
  return JSON.parse(localStorage.getItem(storageKey));
};

export const updateCartStorage = (cart) => {
  return localStorage.setItem(storageKey, JSON.stringify([...cart]));
};

export const deleteCartStorage = () => {
  return localStorage.setItem(storageKey, JSON.stringify([]));
};

export const handleAddPokemon = (cart, newPokemon) => {
  let hasPokemon = false;

  const newCart = cart.map((pokemon) => {
    if (pokemon?.id === newPokemon?.id) {
      pokemon.qtd += 1;
      hasPokemon = true;
    }

    return pokemon;
  });

  if (!hasPokemon) {
    const pokemonPrice = handlePokemonPrice(newPokemon);
    newPokemon.price = pokemonPrice;
    newPokemon.qtd = 1;

    newCart.push(newPokemon);
  }

  return newCart;
};

export const handleRemovePokemon = (cart, pokemonId) => {
  return cart.filter((pokemon) => pokemon.id !== pokemonId);
};

export const handleUpdatePokemon = (cart, updatedPokemon) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]?.id === updatedPokemon?.id) {
      cart[i] = updatedPokemon;
      break;
    }
  }

  return cart;
};
