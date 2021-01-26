import React from "react";
import { Icon } from "../styles";

const PrevPage = ({ setCurrentPage }) => {
  return (
    <Icon
      className='fas fa-chevron-left'
      onClick={(e) =>
        setCurrentPage((currentPage) =>
          currentPage >= 1 ? currentPage - 1 : currentPage
        )
      }
    />
  );
};

export default PrevPage;
