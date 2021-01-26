import React from "react";
import { Icon } from "../styles";

const NextPage = ({ setCurrentPage, pagesTotal }) => {
  return (
    <Icon
      className='fas fa-chevron-right'
      onClick={(e) => {
        setCurrentPage((currentPage) =>
          currentPage < pagesTotal ? currentPage + 1 : currentPage
        );
      }}
    />
  );
};

export default NextPage;
