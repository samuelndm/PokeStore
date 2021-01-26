import React from "react";
import { Icon } from "../styles";

const FirstPage = ({ setCurrentPage }) => {
  return (
    <Icon
      className='fas fa-angle-double-left'
      onClick={(e) => setCurrentPage(0)}
    />
  );
};

export default FirstPage;
