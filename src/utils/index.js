export const isExternalUrl = (url) => {
  if (url) {
    const regex = /http:|https:|www\./g;
    return regex.test(url);
  }

  return false;
};

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createEmptyArray = (size) => {
  const array = [];
  if (size && Number.isInteger(size)) {
    for (let i = 0; i < size; i++) {
      array.push(null);
    }
  }

  return array;
};

export const createArrayOfGivenNumber = (number, reverse) => {
  if (number && Number.isInteger(number)) {
    const tmpPages = [];

    if (reverse) {
      for (let i = number - 1; i >= 0; i--) {
        tmpPages.push(i);
      }
    } else {
      for (let i = 0; i < number; i++) {
        tmpPages.push(i);
      }
    }
    return tmpPages;
  }
  return [];
};

export const normalizeString = (string) => {
  let newString = "";
  if (string) {
    newString = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return newString;
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight || document.documentElement.ScrollHeight,
    behavior: "smooth",
  });
};

export const updateUrlParamByKey = (search, key, newValue) => {
  const params = search?.split("?")?.[1]?.split("&") || [];
  let hasFound = false;

  const newParams = params.map((param) => {
    const paramKey = param?.split("=")?.[0];
    if (paramKey === key) {
      hasFound = true;
      return `${key}=${newValue}`;
    }
    return param;
  });

  if (!hasFound) {
    newParams.push(`${key}=${newValue}`);
  }

  return `?${newParams?.join("&") || ""}`;
};

export const removeUrlParamByKey = (search, key) => {
  const params = search?.split("?")?.[1]?.split("&") || [];

  const newParams = params.filter((param) => {
    const paramKey = param?.split("=")?.[0];
    return paramKey !== key;
  });

  return `?${newParams?.join("&") || ""}`;
};
