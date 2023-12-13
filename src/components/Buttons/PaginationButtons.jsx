import React from "react";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationButtons = ({
  nextPage,
  previousPage,
  selectPage,
  totalPages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [1, 2];

  const handlePrevClick = () => {
    previousPage();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePageClick = (newNumberPage) => {
    selectPage(newNumberPage);
  };

  const handleNextClick = () => {
    nextPage();
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Pagination id="pre-next">
      <Pagination.First onClick={() => handlePageClick(1)} />
      <Pagination.Prev id="pre-btn" onClick={handlePrevClick} />
      <Pagination.Item onClick={() => handlePageClick(1)}>{1}</Pagination.Item>
      <Pagination.Ellipsis />


      <Pagination.Ellipsis />
      <Pagination.Item
        onClick={() => handlePageClick(totalPages > 500 ? 500 : totalPages)}
      >
        {totalPages > 500 ? 500 : totalPages}
      </Pagination.Item>
      <Pagination.Next id="next-btn" onClick={handleNextClick} />
      <Pagination.Last onClick={() => handlePageClick(500)} />
    </Pagination>
  );
};

export default PaginationButtons;
