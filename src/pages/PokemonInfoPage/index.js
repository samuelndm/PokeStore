import React, { useCallback, useEffect, useState } from "react";
import { getPokemonById } from "../../services/endpoints/pokemon";
import { getPokemonTypeByName } from "../../utils/pokemonListUtil";
import {
  useNotificationContext,
  useCurrentPokemonTypeContext,
} from "../../contexts";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";
import { ScrollToTop } from "../../utils";

const PokemonInfoPage = ({ match }) => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const {
    currentPokemonType,
    setCurrentPokemonType,
  } = useCurrentPokemonTypeContext();
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = useCallback(async () => {
    try {
      const { data } = await getPokemonById(match?.params?.id);
      setPokemon(data);

      if (!currentPokemonType) {
        const pokemonType = getPokemonTypeByName(data?.types?.[0]?.type?.name);
        setCurrentPokemonType(pokemonType);
      }
    } catch (err) {
      console.error(err);

      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message:
          "Ocorreu um erro ao buscar o Pokémon, tente novamente mais tarde",
      });
    }

    // eslint-disable-next-line
  }, [match?.params?.id]);

  useEffect(() => {
    loadPokemon();
    ScrollToTop();
  }, [loadPokemon]);

  return (
    <GS.PageContainer>
      <C.PokemonInfo pokemon={pokemon} />
    </GS.PageContainer>
  );
};

export default PokemonInfoPage;
