import api from "../../api";

export const getPokemonById = (id, params) => {
  return api.get(`/pokemon/${id}`, {
    params: { ...params },
  });
};
