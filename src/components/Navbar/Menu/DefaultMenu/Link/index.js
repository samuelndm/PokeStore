import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "../../../../UIComponents";

const Link = ({ link }) => {
  if (!link) return null;
  return (
    <S.Container>
      <UI.LinkHandler
        url={link.url}
        target={link.target}
        title={link.title}
        color='#fff'
        colorOnHover='var(--yellow-color)'
        padding='20px'
        fontSize='16px'
        fontWeight='600'
      />
    </S.Container>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
};

export default Link;
