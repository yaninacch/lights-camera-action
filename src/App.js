import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import MovieCards from "./components/MovieCards/MovieCards";
import PaginationButtons from "./components/Buttons/PaginationButtons";
import Footer from "./components/Footer";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [genreId, setGenreId] = useState("");

  const [pageNumber, setPageNumber] = useState(1);

  // Create the URL based on state values
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=54148e3525e5866210d37456cc9a22d9&page=${pageNumber}&with_genres=${genreId}`;

  const { data: moviesResponse, error: movieError, loading } = useFetch(url);

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

  const selectPage = (newPageNumber) => {
    console.log(newPageNumber)
    setPageNumber(newPageNumber);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    setMovies(moviesResponse.results);
  }, [moviesResponse]);

  return (
    <div className="App">
      <Header />
      {!loadingGenre && (
        <NavbarMenu genres={genreResponse.genres} selectGenre={selectGenre} />
      )}
      {movies && <MovieCards movies={movies} />}
      <PaginationButtons
        nextPage={nextPage}
        previousPage={previousPage}
        selectPage={selectPage}
        totalPages={moviesResponse.total_pages}
      />
      <Footer />
    </div>
  );
};

export default App;

// "https://api.themoviedb.org/3/movie/popular?api_key=54148e3525e5866210d37456cc9a22d9&language=en-US&page=1"
