import api from "../../api";

export const getPokemonSpecies = (params = {}) => {
  return api.get("/pokemon-species/?limit=0", {
    params: { ...params },
  });
};
