import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createArrayOfGivenNumber } from "../../../utils";
import * as S from "./styles";
import FirstPage from "./FirstPage";
import PrevPage from "./PrevPage";
import Pages from "./Pages";
import NextPage from "./NextPage";
import LastPage from "./LastPage";

const Pagination = ({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
  color,
}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const perPage = itemsPerPage || 9;
    const numberOfPages =
      totalItems >= perPage ? Math.ceil(totalItems / perPage) : 1;

    setPages(createArrayOfGivenNumber(numberOfPages));
  }, [itemsPerPage, totalItems]);

  if (pages.length < 2) return null;
  return (
    <S.Container color={color}>
      <FirstPage setCurrentPage={setCurrentPage} />
      <PrevPage setCurrentPage={setCurrentPage} />

      <Pages
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <NextPage setCurrentPage={setCurrentPage} pagesTotal={pages.length - 1} />
      <LastPage setCurrentPage={setCurrentPage} pagesTotal={pages.length - 1} />
    </S.Container>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Pagination;
