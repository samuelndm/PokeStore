import React from "react";
import { Page } from "../../styles";

const EndPages = ({ prevPage, prevPages, page, setPage, selectPage }) => {
  return (
    <>
      {prevPages.map(
        (index) =>
          !!prevPage && (
            <Page
              onClick={(e) => setPage(prevPage - index)}
              key={`EndPages-${index}`}
            >
              {prevPage - index}
            </Page>
          )
      )}

      <Page onClick={(e) => selectPage(e)}>...</Page>
      <Page isActive={true}>{page}</Page>
    </>
  );
};

export default EndPages;
