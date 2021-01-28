import React, { useCallback, useEffect, useState } from "react";
import { getTypesById } from "../../services/endpoints/type";
import { handlePokemonsPagination } from "../../utils/PokemonListUtil";
import {
  useCurrentPokemonTypeContext,
  useNotificationContext,
} from "../../contexts";
import * as S from "./styles";
import * as UI from "../UIComponents";
import Pokemon from "./Pokemon";

const PokemonsList = () => {
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const { currentPokemonType } = useCurrentPokemonTypeContext();
  const [typeList, setTypeList] = useState([]);
  const [pokemonsEndpoint, setPokemonsEndpoint] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(12);

  const loadPokemons = useCallback(async (currentPokemonType) => {
    try {
      const { data } = await getTypesById(currentPokemonType.id);

      setTypeList(data?.pokemon?.map(({ pokemon }) => pokemon) || []);
    } catch (err) {
      console.error(err);

      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message:
          "Ocorreu um erro ao carregar os pokémons, tente novamente mais tarde",
      });
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    currentPokemonType?.id && loadPokemons(currentPokemonType);
  }, [loadPokemons, currentPokemonType]);

  useEffect(() => {
    const pokemonsEndpointTemp = handlePokemonsPagination(
      typeList,
      currentPage,
      itemsPerPage
    );

    setPokemonsEndpoint([...pokemonsEndpointTemp]);
  }, [typeList, currentPage, itemsPerPage]);

  return (
    <S.Container>
      <S.Pokemons>
        {pokemonsEndpoint?.map((endpoint, index) => (
          <Pokemon
            pokemonEndpoint={endpoint}
            key={`pokemon-endpoint-${endpoint}`}
          />
        ))}
      </S.Pokemons>

      <UI.Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={typeList.length}
        color={currentPokemonType?.color}
      />
    </S.Container>
  );
};

export default PokemonsList;
