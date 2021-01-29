import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateSearchByKey } from "../../../utils";
import { URL_PARAMS } from "../../../utils/constants";
import { resetPaginationUrl } from "../../../utils/paginationUtil";
import {
  useCurrentPokemonTypeContext,
  useNotificationContext,
} from "../../../contexts";
import * as S from "./styles";

const Search = () => {
  const history = useHistory();
  const { currentPokemonType } = useCurrentPokemonTypeContext();
  const { createNotification, NOTIFICATION_TYPES } = useNotificationContext();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentPokemonType) {
      const url = `/tipo/${currentPokemonType.name.en_us}`;

      resetPaginationUrl(history);

      let params = updateSearchByKey(
        history.location.search,
        URL_PARAMS.SEARCHED_POKEMON,
        keyword
      );

      history.push(`${url}${params}`);
    } else {
      createNotification({
        type: NOTIFICATION_TYPES.WARNING,
        message: "É necessário escolher um tipo de pokémon primeiro!",
      });
    }
  };

  return (
    <S.Form onSubmit={(e) => handleSubmit(e)}>
      <S.Input type='search' onChange={(e) => setKeyword(e.target.value)} />

      <S.Button type='submit'>
        <S.Icon className='fas fa-search' />
      </S.Button>
    </S.Form>
  );
};

export default Search;
