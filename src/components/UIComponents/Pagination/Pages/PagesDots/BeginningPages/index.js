import React from "react";
import { Page } from "../../styles";

const BeginningPages = ({
  prevPage,
  currentPage,
  nextPage,
  nextPages,
  setCurrentPage,
  selectPage,
  pages,
}) => {
  return (
    <>
      {prevPage !== null && (
        <Page onClick={(e) => setCurrentPage(prevPage)}>{prevPage + 1}</Page>
      )}

      <Page isActive={true}>{currentPage + 1}</Page>

      {nextPages.map(
        (page) =>
          nextPage !== null &&
          currentPage + page + 1 < pages.length && (
            <Page
              onClick={(e) => setCurrentPage(nextPage + page)}
              key={`BeginningPages-${page}`}
            >
              {nextPage + page + 1}
            </Page>
          )
      )}

      <Page onClick={(e) => selectPage(e)}>...</Page>
    </>
  );
};

export default BeginningPages;
