import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import MovieCards from "./components/MovieCards/MovieCards";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import { useFetch } from "./hooks/useFetch";
import Router from "./router/router";

import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  const [genreId, setGenreId] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  // Create the URL based on state values
  const urlMoviesList = `https://api.themoviedb.org/3/discover/movie?api_key=54148e3525e5866210d37456cc9a22d9&page=${currentPage}&with_genres=${genreId}${
    sortBy ? `&sort_by=${sortBy}` : ""
  }`;

  const {
    data: moviesResponse,
    error: movieError,
    loading,
  } = useFetch(urlMoviesList);

  const {
    data: genreResponse,
    error: genreError,
    loading: loadingGenre,
  } = useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=54148e3525e5866210d37456cc9a22d9"
  );

  const selectGenre = (genreId) => {
    setGenreId(genreId);
  };

  const selectOrder = (sortBy) => {
    setSortBy(sortBy);
  };

  const selectPage = (newPageNumber) => {
    setCurrentPage(newPageNumber);
  };

  useEffect(() => {
    setMovies(moviesResponse.results);
  }, [moviesResponse]);

  return (
    <div className="App">
      <Header />
      {!loadingGenre && (
        <NavbarMenu
          genres={genreResponse.genres}
          selectGenre={selectGenre}
          selectOrder={selectOrder}
        />
      )}

      <Router movies={movies} />

      {location.pathname === "/" && (
        <PaginationButtons
          totalItems={moviesResponse.total_results}
          currentPage={currentPage}
          selectPage={selectPage}
        />
      )}
    </div>
  );
};

export default App;

// "https://api.themoviedb.org/3/movie/popular?api_key=54148e3525e5866210d37456cc9a22d9&language=en-US&page=1"
