import React from "react";
import { Icon } from "../styles";

const LastPage = ({ setCurrentPage, pagesTotal }) => {
  return (
    <Icon
      className='fas fa-angle-double-right'
      onClick={(e) => setCurrentPage(pagesTotal)}
    />
  );
};

export default LastPage;
