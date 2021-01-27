import api from "../../api";

export const getTypes = (params) => {
  return api.get(`/type`, {
    params: { ...params },
  });
};

export const getTypesById = (id, params) => {
  return api.get(`/type/${id}`, {
    params: { ...params },
  });
};

export const getTypesByName = (name, params) => {
  return api.get(`/type/${name}`, {
    params: { ...params },
  });
};
