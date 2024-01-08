import { Routes, Route } from "react-router-dom";
import CardDetail from "../pages/Details/Details";
import MovieList from "../components/MovieList/MovieList";

const Router = ({ movies }) => {
  return (
    <Routes>
      <Route exact path="/" element={<MovieList movies={movies} />} />
      <Route exact path="/details/:id" element={<CardDetail />} />
    </Routes>
  );
};

export default Router;
