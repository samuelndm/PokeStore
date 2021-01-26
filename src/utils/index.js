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
