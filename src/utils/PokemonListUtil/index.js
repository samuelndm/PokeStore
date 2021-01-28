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

export const handlePokemonsPagination = (
  typeList,
  currentPage,
  itemsPerPage,
  searchedPokemon
) => {
  const start = itemsPerPage * currentPage;
  const end = start + itemsPerPage;

  const pokemonsEndpoint = [];
  const tempTypeList = filterPokemonsByKeyword(typeList, searchedPokemon);

  for (let i = start; i < end; i++) {
    if (tempTypeList?.[i]) {
      pokemonsEndpoint.push(tempTypeList[i].url);
    }
  }

  return pokemonsEndpoint;
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
