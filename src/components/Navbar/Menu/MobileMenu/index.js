import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonTypeContext } from "../../../../contexts";
import * as S from "./styles";
import Link from "./Link";

const MobileMenu = ({ menu }) => {
  const { currentPokemonType } = useCurrentPokemonTypeContext();
  const [isVisible, setIsVisible] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (hasClicked) {
      setHasClicked(false);
      setIsVisible(false);
    }
  }, [hasClicked]);

  if (!menu || !menu.length) return null;
  return (
    <S.Container>
      <S.Icon
        className='fas fa-bars'
        isVisible={isVisible}
        onClick={(e) => setIsVisible((prev) => !prev)}
      />

      <S.Menu isVisible={isVisible}>
        {menu.map((link) => (
          <Link
            link={link}
            setIsVisible={setIsVisible}
            setHasClicked={setHasClicked}
            key={`mobilemenu-${link.id}`}
          />
        ))}
      </S.Menu>
    </S.Container>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileMenu;
