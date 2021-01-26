import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isExternalUrl } from "../../../utils";
import * as S from "./styles";

const LinkHandler = ({
  url,
  target,
  title,
  children,
  childrenPosition,
  textColor,
  width,
  setHasClicked,
}) => {
  const [urlLink] = useState(url || "#");
  const [targetLink] = useState(target || "_self");
  const [titleLink] = useState(title || "");

  return (
    <S.Container
      childrenPosition={childrenPosition}
      textColor={textColor}
      width={width}
    >
      {isExternalUrl(url) ? (
        <S.LinkAnchor href={urlLink} target={targetLink}>
          {titleLink && <S.Title>{titleLink}</S.Title>}
          {children}
        </S.LinkAnchor>
      ) : (
        <Link
          to={urlLink}
          target={targetLink}
          onClick={(e) => {
            setHasClicked && setHasClicked(true);
          }}
        >
          {titleLink && <S.Title>{titleLink}</S.Title>}
          {children}
        </Link>
      )}
    </S.Container>
  );
};


LinkHandler.propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  childrenPosition: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  setHasClicked: PropTypes.func,
}

export default LinkHandler;
