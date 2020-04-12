import React from 'react';
import MovieItem from "./MovieItem/MovieItem";

class MovieList extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.movies.map(movie =>
                        <MovieItem key={movie.id} movie={movie} />
                    )}
                </div>
            </div>
        );
    }
}

export default MovieList;