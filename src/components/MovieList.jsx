import MovieCards from "./MovieCards/MovieCards";

const MovieList = ({movies}) => {
    return(
        <>

        {movies && <MovieCards movies={movies} />}
        </>
    )
}

export default MovieList;