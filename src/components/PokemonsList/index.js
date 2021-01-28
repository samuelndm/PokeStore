import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTypesById } from "../../services/endpoints/type";
import {
  filterPokemonsByKeyword,
  handlePokemonsPagination,
} from "../../utils/PokemonListUtil";
import {
  useCurrentPokemonTypeContext,
  useNotificationContext,
} from "../../contexts";
import * as S from "./styles";
import * as UI from "../UIComponents";
import Pokemon from "./Pokemon";

const PokemonsList = ({ searchedPokemon }) => {
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
    setCurrentPage(0);
  }, [searchedPokemon]);

  useEffect(() => {
    const pokemonsEndpointTemp = handlePokemonsPagination(
      typeList,
      currentPage,
      itemsPerPage,
      searchedPokemon
    );

    setPokemonsEndpoint([...pokemonsEndpointTemp]);
  }, [typeList, currentPage, itemsPerPage, searchedPokemon]);

  return searchedPokemon && !pokemonsEndpoint.length ? (
    <S.NotFound>Nenhum pokémon foi encontrado</S.NotFound>
  ) : (
    <S.Container>
      <S.Pokemons>
        {pokemonsEndpoint?.map((endpoint) => (
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
        totalItems={filterPokemonsByKeyword(typeList, searchedPokemon).length}
        color={currentPokemonType?.color}
      />
    </S.Container>
  );
};

PokemonsList.propTypes = {
  searchedPokemon: PropTypes.string,
};

export default PokemonsList;
