import React from "react";
import Card from "react-bootstrap/Card";
import photoImg from "../img/Image-Not-Available.png";
import { Link } from "react-router-dom";

const MovieCards = ({ movies }) => {
  return (
    <>
      <h1 id="title-more">MORE POPULAR</h1>
      <ul className="cards-container">
        {movies.map((movie) => {
          return (
            <Link to={`/details/${movie.id}`}>
              <Card id="cards">
                <Card.Img
                  id="movie-img"
                  variant="top"
                  src={
                    movie.poster_path
                      ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : photoImg
                  }
                />
                <Card.Body className="card-text">
                  <Card.Title id="movie-title">{movie.title}</Card.Title>
                  <Card.Text>Release Year: {movie.release_date}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCards;
