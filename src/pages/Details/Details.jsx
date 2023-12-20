import React from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import photoImg from "../../components/img/Image-Not-Available (2).png"

const Details = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  const {
    data: movie,
    error,
    loading: loadingMovie,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=54148e3525e5866210d37456cc9a22d9`
  );
  console.log(movie);

  if (loadingMovie) return <p>Loading movie details...</p>;

  return (
    <Card id="movie-details">
      <Card.Img
        id="movie-details-img"
        variant="top"
        src={movie.poster_path ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`: photoImg}
      />
      <Card.Body className="card-text">
        <Card.Title id="movie-details-title">{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Card.Text>Release Year: {movie.release_date}</Card.Text>
        <Card.Text>Voting average: {movie.vote_average}</Card.Text>
        <Card.Text>Total votes: {movie.vote_count}</Card.Text>
        <Card.Text>
          Genres: &nbsp;
          {movie.genres.map((genre, index) => {
            return `${genre.name}${
              index === movie.genres.length - 1 ? "." : ","
            }  `;
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Details;
