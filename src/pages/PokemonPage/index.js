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
  const { setCurrentPokemonType } = useCurrentPokemonTypeContext();
  const [pokemonId] = useState(match?.params?.id);
  const [pokemon, setPokemon] = useState(null);

  const loadPokemon = useCallback(async () => {
    try {
      const { data } = await getPokemonById(pokemonId);
      setPokemon(data);

      const pokemonType = getPokemonTypeByName(data?.types?.[0]?.type?.name);
      setCurrentPokemonType(pokemonType);
    } catch (err) {
      console.error(err);
    }
  }, [pokemonId, setCurrentPokemonType]);

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
