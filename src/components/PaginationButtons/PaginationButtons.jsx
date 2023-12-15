import React from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

const PaginationButtons = ({
  selectPage,
  totalItems,
  currentPage,
}) => {

  const handlePageClick = (newNumberPage) => {
    selectPage(newNumberPage);
  };

  return (
    <PaginationControl
      page={currentPage}
      between={4}
      total={totalItems > 10000 ? 10000 : totalItems}
      limit={20}
      changePage={(page) => handlePageClick(page)}
      ellipsis={1}
    />
  );
};

export default PaginationButtons;
