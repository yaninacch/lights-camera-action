import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieList from "./MovieList";

test("should render movie list", () => {
  const movies = [{ title: "Leo" }, { title: "Silent Night" }];

  const component = render(
    <BrowserRouter>
      <MovieList 
      movies={movies}/>
    </BrowserRouter>
  );

  expect(screen.getByText("Leo")).toBeInTheDocument();
  expect(screen.getByText("Silent Night")).toBeInTheDocument();
});
