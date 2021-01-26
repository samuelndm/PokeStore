import React, { useEffect, useState } from "react";
import PagesDefault from "./PagesDefault";
import PagesDots from "./PagesDots";

const Pages = ({ pages, currentPage, setCurrentPage }) => {
  const [limit, setLimit] = useState(4);

  const isWindowWidthSize = (width) => {
    return window.matchMedia(`(${width})`).matches;
  };

  useEffect(() => {
    switch (true) {
      case isWindowWidthSize("max-width: 575px"):
        setLimit(0);
        break;
      default:
        setLimit(4);
        break;
    }
  }, []);

  return (
    <>
      {pages.length < limit ? (
        <PagesDefault
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <PagesDots
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          limit={limit}
        />
      )}
    </>
  );
};

export default Pages;
