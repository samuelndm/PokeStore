import { normalizeString } from "..";
import { POKEMON_TYPES_LIST } from "../constants";

export const getPokemonTypeByName = (name) => {
  if (!name) return null;

  const normalizedName = normalizeString(name?.trim()?.toLowerCase());

  return POKEMON_TYPES_LIST.find(
    (pokemon) =>
      normalizedName ===
        normalizeString(pokemon?.name?.en_us)?.trim()?.toLowerCase() ||
      normalizedName ===
        normalizeString(pokemon?.name?.pt_br)?.trim()?.toLowerCase()
  );
};

export const getSearchedPokemonParam = (history) => {
  const urlParams = new URLSearchParams(history?.location?.search);
  const searchedPokemonParam = urlParams.get("searched_pokemon");

  return searchedPokemonParam || "";
};

export const handlePokemonsPagination = (pokemons, pagination) => {
  const { itemsPerPage, page } = pagination;

  const start = itemsPerPage * page;
  const end = start + itemsPerPage;

  const paginatedPokemons = [];

  for (let i = start; i < end; i++) {
    if (pokemons?.[i]) {
      paginatedPokemons.push(pokemons[i]);
    }
  }

  return paginatedPokemons;
};

export const filterPokemonsByKeyword = (pokemons, keyword) => {
  if (pokemons && keyword) {
    const normalizedSearched = normalizeString(keyword).trim().toLowerCase();

    return pokemons.filter(({ name }) =>
      name.toLowerCase().includes(normalizedSearched)
    );
  }

  return pokemons;
};
