import React from "react";
import Card from 'react-bootstrap/Card';

const MovieCards = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <h1 id="title-more">MORE POPULAR</h1>
      <ul className="cards-container">
        {movies.map((movie) => {
          return (
            <>
              <Card className="cards">
                <Card.Img
                  variant="top"
                  src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                />
                <Card.Body className="card-text">
                  <Card.Title id="movie-title">{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.overview}
                  </Card.Text>
                  <Card.Text>
                  Release Year: {movie.release_date}
                  </Card.Text>
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
