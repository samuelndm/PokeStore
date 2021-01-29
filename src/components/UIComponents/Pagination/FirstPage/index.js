import React from "react";
import { Icon } from "../styles";

const FirstPage = ({ setPage }) => {
  return (
    <Icon className='fas fa-angle-double-left' onClick={(e) => setPage(1)} />
  );
};

export default FirstPage;
