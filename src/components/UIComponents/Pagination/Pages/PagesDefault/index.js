import React from "react";
import { Page } from "../styles";

const PagesDefault = ({ page, setPage, pages }) => {
  return (
    <>
      {pages.map((index) => (
        <Page
          isActive={page === index + 1}
          onClick={(e) => setPage(index + 1)}
          key={`page-${index}`}
        >
          {index + 1}
        </Page>
      ))}
    </>
  );
};

export default PagesDefault;
