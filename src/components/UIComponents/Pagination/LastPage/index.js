import React from "react";
import { Icon } from "../styles";

const LastPage = ({ lastPage, setPage }) => {
  return (
    <Icon
      className='fas fa-angle-double-right'
      onClick={(e) => setPage(lastPage)}
    />
  );
};

export default LastPage;
