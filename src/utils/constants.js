export const POKEMON_STATS = {
  HP: "hp",
  ATTACK: "attack",
  DEFENSE: "defense",
  SPECIAL_ATTACK: "special-attack",
  SPECIAL_DEFENSE: "special-defense",
  SPEED: "speed",
};

export const POKEMON_TYPES = {
  normal: { id: 1, name: { pt_br: "Normal" }, color: "#C4C0B4" },
  fighting: { id: 2, name: { pt_br: "Lutador" }, color: "#852816" },
  flying: { id: 3, name: { pt_br: "Voador" }, color: "#8FA4FF" },
  poison: { id: 4, name: { pt_br: "Venenoso" }, color: "#924990" },
  ground: { id: 5, name: { pt_br: "Terra" }, color: "#C5A455" },
  rock: { id: 6, name: { pt_br: "Pedra" }, color: "#5E491C" },
  bug: { id: 7, name: { pt_br: "Inseto" }, color: "#87950C" },
  ghost: { id: 8, name: { pt_br: "Fantasma" }, color: "#6969AF" },
  steel: { id: 9, name: { pt_br: "Metálico" }, color: "#7F8488" },
  fire: { id: 10, name: { pt_br: "Fogo" }, color: "#CF2C03" },
  water: { id: 11, name: { pt_br: "Água" }, color: "#3B9BF1" },
  grass: { id: 12, name: { pt_br: "Planta" }, color: "#67AF32" },
  electric: { id: 13, name: { pt_br: "Elétrico" }, color: "#E08D00" },
  psychic: { id: 14, name: { pt_br: "Psíquico" }, color: "#E25484" },
  ice: { id: 15, name: { pt_br: "Gelo" }, color: "#B4EDF8" },
  dragon: { id: 16, name: { pt_br: "Dragão" }, color: "#7361D1" },
  dark: { id: 17, name: { pt_br: "Noturno" }, color: "#413831" },
  fairy: { id: 18, name: { pt_br: "Fada" }, color: "#E29FE6" },
  unknown: { name: { pt_br: "Desconhecido" }, color: "#000" },
  shadow: { name: { pt_br: "Sombrio" }, color: "#2E3053" },
};

export const CURRENT_POKEMON_STATUS = {
  NEW: "new",
  CAPTURED: "captured",
  CUSTOM: "custom",
};
