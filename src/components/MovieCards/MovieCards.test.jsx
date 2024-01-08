import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCards from "./MovieCards";

test("render movie cards", () => {
  
    const movies = [{title: "Wonka"},{title: "Freelance"}];
  
    const component = render(
    <BrowserRouter>
      <MovieCards 
      movies={movies} />
    </BrowserRouter>
  );

  expect(screen.getByText("Wonka")).toBeInTheDocument();
  expect(screen.getByText("Freelance")).toBeInTheDocument();
});
