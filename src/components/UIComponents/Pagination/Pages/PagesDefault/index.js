import React from "react";
import { Page } from "../styles";

const PagesDefault = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <>
      {pages.map((index) => (
        <Page
          isActive={currentPage === index}
          onClick={(e) => setCurrentPage(index)}
          key={`page-${index}`}
        >
          {index + 1}
        </Page>
      ))}
    </>
  );
};

export default PagesDefault;
