import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
      history.push(
        `/${currentPokemonType.name.pt_br}?searched_pokemon=${keyword}`
      );
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
