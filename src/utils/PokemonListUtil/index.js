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
  itemsPerPage
) => {
  const start = itemsPerPage * currentPage;
  const end = start + itemsPerPage;

  const pokemonsEndpointTemp = [];
  for (let i = start; i < end; i++) {
    if (typeList?.[i]) {
      pokemonsEndpointTemp.push(typeList[i].url);
    }
  }

  return pokemonsEndpointTemp;
};
