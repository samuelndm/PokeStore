import { updateSearchByKey } from "..";
import { URL_PARAMS } from "../constants";

export const getPerPageParam = (history) => {
  const params = new URLSearchParams(history.location.search);
  const param = params.get(URL_PARAMS.PER_PAGE_KEY);
  const perPage =
    param !== null && param !== undefined ? parseInt(param) : null;

  return perPage;
};

export const getCurrentPageParam = (history) => {
  const params = new URLSearchParams(history.location.search);
  const param = params.get(URL_PARAMS.PAGE_KEY);
  const page = param !== null && param !== undefined ? parseInt(param) : null;

  return page;
};

export const isPerPageValid = (param, totalItems) => {
  return (
    param !== null && param !== undefined && param > 0 && param <= totalItems
  );
};

export const isPageValid = (param, numberOfPages) => {
  return (
    param !== null && param !== undefined && param > 0 && param <= numberOfPages
  );
};

export const updatePaginationUrl = (history, pageValue, perPageValue) => {
  let newParams = updateSearchByKey(
    history.location.search,
    URL_PARAMS.PER_PAGE_KEY,
    perPageValue
  );

  newParams = updateSearchByKey(newParams, URL_PARAMS.PAGE_KEY, pageValue);

  history?.push({
    pathname: history.location.pathame,
    search: newParams,
  });
};

export const resetPaginationUrl = (history) => {
  let newParams = updateSearchByKey(
    history.location.search,
    URL_PARAMS.PER_PAGE_KEY,
    12
  );

  newParams = updateSearchByKey(newParams, URL_PARAMS.PAGE_KEY, 1);

  history?.push({
    pathname: history.location.pathame,
    search: newParams,
  });
};
