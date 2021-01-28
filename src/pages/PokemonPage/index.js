import React, { useCallback, useEffect, useState } from "react";
import { getPokemonById } from "../../services/endpoints/pokemon";
import { getPokemonTypeByName } from "../../utils/PokemonListUtil";
import {
  useNotificationContext,
  useCurrentPokemonTypeContext,
} from "../../contexts";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";

const PokemonPage = ({ match }) => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const {
    currentPokemonType,
    setCurrentPokemonType,
  } = useCurrentPokemonTypeContext();
  const [pokemonId] = useState(match?.params?.id);
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = useCallback(async () => {
    try {
      const { data } = await getPokemonById(pokemonId);
      setPokemon(data);

      const pokemonType =
        currentPokemonType ||
        getPokemonTypeByName(data?.types?.[0]?.type?.name);

      setCurrentPokemonType(pokemonType);
    } catch (err) {
      console.error(err);

      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message:
          "Ocorreu um erro ao buscar o Pokémon, tente novamente mais tarde",
      });
    }

    // eslint-disable-next-line
  }, [pokemonId]);

  useEffect(() => {
    setCurrentPokemonType({});
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  return (
    <GS.PageContainer>
      <C.PokemonInfo pokemon={pokemon} />
    </GS.PageContainer>
  );
};

export default PokemonPage;
