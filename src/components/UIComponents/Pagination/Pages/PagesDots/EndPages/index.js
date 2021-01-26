import React from "react";
import { Page } from "../../styles";

const EndPages = ({
  prevPage,
  prevPages,
  currentPage,
  setCurrentPage,
  selectPage,
}) => {
  return (
    <>
      {prevPages.map(
        (page) =>
          prevPage !== null && (
            <Page
              onClick={(e) => setCurrentPage(prevPage - page)}
              key={`EndPages-${page}`}
            >
              {prevPage - page + 1}
            </Page>
          )
      )}

      <Page onClick={(e) => selectPage(e)}>...</Page>
      <Page isActive={true}>{currentPage + 1}</Page>
    </>
  );
};

export default EndPages;
