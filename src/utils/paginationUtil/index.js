import { updateSearchByKey } from "..";

const PER_PAGE_KEY = "perpage";
const PAGE_KEY = "page";

export const getPerPageParam = (history) => {
  const params = new URLSearchParams(history.location.search);
  const param = params.get(PER_PAGE_KEY);
  const perPage =
    param !== null && param !== undefined ? parseInt(param) : null;

  return perPage;
};

export const getCurrentPageParam = (history) => {
  const params = new URLSearchParams(history.location.search);
  const param = params.get(PAGE_KEY);
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
    PER_PAGE_KEY,
    perPageValue
  );

  newParams = updateSearchByKey(newParams, PAGE_KEY, pageValue);

  history?.push({
    pathname: history.location.pathame,
    search: newParams,
  });
};
