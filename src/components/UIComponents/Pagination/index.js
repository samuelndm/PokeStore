import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { createArrayOfGivenNumber, ScrollToTop } from "../../../utils";
import * as UTIL from "../../../utils/paginationUtil";
import * as S from "./styles";
import FirstPage from "./FirstPage";
import PrevPage from "./PrevPage";
import Pages from "./Pages";
import NextPage from "./NextPage";
import LastPage from "./LastPage";

const Pagination = ({ itemsPerPage, initialPage, totalItems, color }) => {
  const history = useHistory();
  const [perPage, setPerPage] = useState(null);
  const [page, setPage] = useState(null);
  const [pages, setPages] = useState([]);

  const handleParams = useCallback(() => {
    const perPageParam = UTIL.getPerPageParam(history);
    const isNewPerPageValid = UTIL.isPerPageValid(perPageParam, totalItems);

    if (isNewPerPageValid) {
      setPerPage(perPageParam);
    } else {
      setPerPage(itemsPerPage || 9);
    }

    const isOnePage = totalItems < perPage;
    const numberOfPages = isOnePage
      ? 1
      : Math.ceil(totalItems / perPage || itemsPerPage);

    const currentPageParam = UTIL.getCurrentPageParam(history);
    const isCurrentPageParamValid = UTIL.isPageValid(
      currentPageParam,
      numberOfPages
    );

    if (isCurrentPageParamValid) {
      setPage(currentPageParam);
    } else {
      setPage(initialPage || 1);
    }

    // eslint-disable-next-line
  }, [history, history.location.search, itemsPerPage, initialPage, totalItems]);

  const hadlePagination = useCallback(() => {
    const isOnePage = totalItems < perPage;
    const numberOfPages = isOnePage ? 1 : Math.ceil(totalItems / perPage);

    setPages(createArrayOfGivenNumber(numberOfPages));

    UTIL.updatePaginationUrl(history, page, perPage);
    ScrollToTop();
  }, [page, perPage, history, totalItems]);

  useEffect(() => {
    handleParams();
  }, [handleParams]);

  useEffect(() => {
    if (page && perPage) {
      hadlePagination();
    }
  }, [page, perPage, hadlePagination]);

  if (pages.length < 2) return null;
  return (
    <S.Container color={color}>
      <FirstPage setPage={setPage} />
      <PrevPage page={page} setPage={setPage} />

      <Pages page={page} setPage={setPage} pages={pages} />

      <NextPage page={page} setPage={setPage} pagesTotal={pages.length} />
      <LastPage lastPage={pages.length} setPage={setPage} />
    </S.Container>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  initialPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Pagination;
