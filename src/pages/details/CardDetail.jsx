import React from "react";
import { Card } from "react-bootstrap";


const CardDetail = (movie) => {
    return(

        <Card>
            <Card.Img
            variant="top"
            src={ `http://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <Card.Body className="card-text">
                  <Card.Title id="movie-title">{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
        </Card>

    )
}

export default CardDetail