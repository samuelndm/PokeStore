import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";
import * as S from "./styles";

const Name = ({ name }) => {
  return !name ? (
    <Skeleton variant='text' animation='wave' width='100%' />
  ) : (
    <S.Container>{name}</S.Container>
  );
};

Name.propTypes = {
  name: PropTypes.string,
};

export default Name;
