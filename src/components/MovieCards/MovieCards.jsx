import React from "react";
import Card from "react-bootstrap/Card";
import photoImg from "../img/photo-not.jpg";

const MovieCards = ({ movies, selectMovie }) => {
  const handleCardClick = (selectedMovie) => {
    console.log('select card')
    selectMovie(selectedMovie);
  };
  return (
    <>
      <h1 id="title-more">MORE POPULAR</h1>
      <ul className="cards-container">
        {movies.map((movie) => {
          return (
            <>
              <Card className="cards" onClick={() => handleCardClick(movie)}>
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
            </>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCards;
