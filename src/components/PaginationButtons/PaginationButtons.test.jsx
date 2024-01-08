import React from "react";
import PaginationButtons from "./PaginationButtons";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("should show pagination buttons.", () => {
  const selectPage = jest.fn();

  const component = render(
    <BrowserRouter>
      <PaginationButtons
        selectPage={selectPage}
        totalItems={200}
        currentPage={1}
      />
    </BrowserRouter>
  );

  expect(screen.getByRole("button", {name: "2"})
  ).toBeInTheDocument();

  expect(screen.getByRole("button", {name: "Next"})
  ).toBeInTheDocument();


});
