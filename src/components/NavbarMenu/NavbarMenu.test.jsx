import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavbarMenu from "./NavbarMenu";
import { BrowserRouter } from "react-router-dom";

test("render component", () => {
  const selectGenre = jest.fn();
  const selectOrder = jest.fn();
  const genres = [{ id: 1, name: "Action" }];

  const component = render(
    <BrowserRouter>
      <NavbarMenu
        selectGenre={selectGenre}
        selectOrder={selectOrder}
        genres={genres}
      />
    </BrowserRouter>
  );
  expect(screen.getByRole("button", { name: "HOME" })).toBeInTheDocument();
});

test("should call selectGener and orderBy functions", () => {
  const selectGenre = jest.fn();
  const selectOrder = jest.fn();
  const genres = [{ id: 1, name: "Action" }];

  const component = render(
    <BrowserRouter>
      <NavbarMenu
        selectGenre={selectGenre}
        selectOrder={selectOrder}
        genres={genres}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByRole("combobox", { name: "filterByGenreSelect" })
  ).toBeInTheDocument();

  fireEvent.change(screen.getByRole('combobox', {name: "filterByGenreSelect"}))

  expect(selectGenre).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByRole('combobox', {name: "orderBySelect"}))

  expect(selectOrder).toHaveBeenCalledTimes(1);


});
