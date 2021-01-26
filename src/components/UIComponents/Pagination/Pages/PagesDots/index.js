import React, { useEffect, useState } from "react";
import { createArrayOfGivenNumber } from "../../../../../utils";
import BeginningPages from "./BeginningPages";
import EndPages from "./EndPages";

const PagesDots = ({ pages, currentPage, setCurrentPage, limit }) => {
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [prevPages, setPrevPages] = useState([]);
  const [nextPages, setnextPages] = useState([]);

  useEffect(() => {
    setPrevPage(currentPage - 1 >= 0 ? currentPage - 1 : null);
    setNextPage(currentPage + 1 < pages.length - 1 ? currentPage + 1 : null);
  }, [pages, currentPage]);

  useEffect(() => {
    setPrevPages(createArrayOfGivenNumber(limit, "reverse"));
    setnextPages(createArrayOfGivenNumber(limit));
  }, [limit]);

  const selectPage = (event) => {
    event.preventDefault();
    const selectedPage = window.prompt(`Páginas: 1-${pages.length}`);

    if (selectedPage > 0 && selectedPage <= pages.length) {
      setCurrentPage(selectedPage - 1);
    }
  };

  return (
    <>
      {currentPage < pages.length - 1 ? (
        <BeginningPages
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          nextPages={nextPages}
          setCurrentPage={setCurrentPage}
          selectPage={selectPage}
          pages={pages}
        />
      ) : (
        <EndPages
          prevPage={prevPage}
          prevPages={prevPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectPage={selectPage}
        />
      )}
    </>
  );
};

export default PagesDots;
