import React from "react";
import { Icon } from "../styles";

const NextPage = ({ page, setPage, pagesTotal }) => {
  return (
    <Icon
      className='fas fa-chevron-right'
      onClick={(e) => {
        setPage(page < pagesTotal ? page + 1 : page);
      }}
    />
  );
};

export default NextPage;
