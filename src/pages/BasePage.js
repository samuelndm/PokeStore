import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPokemonTypeByName } from "../utils/PokemonListUtil";
import { useCurrentPokemonTypeContext } from "../contexts";
import * as P from "./";

const SlugPage = ({ match }) => {
  const history = useHistory();
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
        history.push("/lista-tipos");
      }
    };

    handlePokemonType(slug);

    // eslint-disable-next-line
  }, [history, slug, currentPokemonType, setCurrentPokemonType]);

  return <P.HomePage></P.HomePage>;
};

export default SlugPage;
