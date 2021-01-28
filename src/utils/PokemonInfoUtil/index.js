export const getPokemonSpritesUrl = (sprites) => {
  const urls = [];

  if (sprites) {
    Object.keys(sprites || {}).forEach((key) => {
      if (key !== "other" && key !== "versions") {
        const url = sprites[key];

        if (url) {
          key === "front_default" ? urls.unshift(url) : urls.push(url);
        }
      }
    });

    const officialArtwork = sprites.other?.["official-artwork"]?.front_default;
    officialArtwork && urls.unshift(officialArtwork);
  }

  return urls;
};

export const concatenateAbilities = (abilities) => {
  let string = abilities?.map(({ ability }) => ability?.name || "")?.join(", ");

  return string;
};

export const handlePokemonStats = (stats, statsType) => {
  if (stats && stats.length && statsType) {
    return stats.find(
      ({ stat, base_stat }) => stat.name === statsType && base_stat
    );
  }

  return {};
};

export const handlePokemonPrice = (stats) => {
  let price = 0;

  if (stats) {
    stats.forEach(({ base_stat }) => {
      if (!Number.isNaN(base_stat)) {
        price += base_stat;
      }
    });
  }

  return price / 10;
};
