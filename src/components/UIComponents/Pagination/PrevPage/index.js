import React from "react";
import { Icon } from "../styles";

const PrevPage = ({ page, setPage }) => {
  return (
    <Icon
      className='fas fa-chevron-left'
      onClick={(e) => setPage(page > 1 ? page - 1 : page)}
    />
  );
};

export default PrevPage;
