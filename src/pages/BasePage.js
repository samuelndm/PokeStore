import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPokemonTypeByName } from "../utils/PokemonListUtil";
import { POKEMON_TYPES } from "../utils/constants";
import { useCurrentPokemonTypeContext } from "../contexts";
import * as P from "./";

const SlugPage = ({ match }) => {
  const history = useHistory();
  const TYPE_DEFAULT = POKEMON_TYPES.FIRE;
  const [slug] = useState(match?.params?.slug);
  const {
    currentPokemonType,
    setCurrentPokemonType,
  } = useCurrentPokemonTypeContext();

  useEffect(() => {
    const handlePokemonType = (slug) => {
      const newType = getPokemonTypeByName(slug);

      if (newType) {
        setCurrentPokemonType(newType);
      } else {
        const typeName = currentPokemonType?.name?.pt_br || TYPE_DEFAULT;
        const type = getPokemonTypeByName(typeName);

        setCurrentPokemonType(type);

        history.push(`/${typeName.toLowerCase()}`);
      }
    };

    handlePokemonType(slug);

    // eslint-disable-next-line
  }, [history, slug, currentPokemonType, setCurrentPokemonType]);

  return <P.HomePage></P.HomePage>;
};

export default SlugPage;
