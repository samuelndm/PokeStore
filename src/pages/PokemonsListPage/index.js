import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTypesById } from "../../services/endpoints/type";
import * as CONTEXT from "../../contexts";
import * as UTIL from "../../utils/pokemonListUtil";
import * as PAGINATION_UTIL from "../../utils/paginationUtil";
import * as S from "./styles";
import * as GS from "../../assets/styles/GlobalStyles";
import * as C from "../../components";
import * as UI from "../../components/UIComponents";

const PokemonsListPage = ({ match }) => {
  const {
    createNotification,
    NOTIFICATION_TYPES,
  } = CONTEXT.useNotificationContext();
  const { setCurrentPokemonType } = CONTEXT.useCurrentPokemonTypeContext();
  const history = useHistory();
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);

  const loadPokemons = async (pokemonType, keyword, pagination) => {
    try {
      const { data } = await getTypesById(pokemonType.id);

      const temp = data?.pokemon?.map(({ pokemon }) => pokemon) || [];
      const filteredPokemons = UTIL.filterPokemonsByKeyword(temp, keyword);
      const paginatedPokemons = UTIL.handlePokemonsPagination(
        filteredPokemons,
        pagination
      );

      setPokemonsFiltered(filteredPokemons);
      setPokemonsList(paginatedPokemons);
    } catch (err) {
      console.error(err);
      createNotification({
        type: NOTIFICATION_TYPES.ERROR,
        message: "Ocorreu algum erro ao carregar os pokemons.",
      });
    }
  };

  useEffect(() => {
    const type = UTIL.getPokemonTypeByName(match.params.slug);
    const searchedPokemon = UTIL.getSearchedPokemonParam(history);
    const itemsPerPage = PAGINATION_UTIL.getPerPageParam(history);
    const page = PAGINATION_UTIL.getCurrentPageParam(history) - 1;

    if (type) {
      setCurrentPokemonType(type);
      loadPokemons(type, searchedPokemon, { itemsPerPage, page });
    } else {
      history.push("/lista-tipos");
    }

    // eslint-disable-next-line
  }, [match, history, history.location, setCurrentPokemonType]);

  return UTIL.getSearchedPokemonParam(history) && !pokemonsList.length ? (
    <S.NotFound>Nenhum pokémon foi encontrado</S.NotFound>
  ) : (
    <GS.PageContainer>
      <C.PokemonsList pokemons={pokemonsList} />

      <UI.Pagination
        itemsPerPage={12}
        initialPage={1}
        totalItems={pokemonsFiltered.length}
      />
    </GS.PageContainer>
  );
};

export default PokemonsListPage;