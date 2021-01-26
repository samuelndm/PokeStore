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
