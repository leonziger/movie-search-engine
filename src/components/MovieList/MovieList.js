import React from 'react';
import MovieItem from "./MovieItem/MovieItem";

class MovieList extends React.Component {
    componentDidMount(props) {
        console.log('MovieList', this.props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*{this.state.movies.map(movie =>*/}
                        {/*<MovieItem key={movie.id} movie={movie}*/}
                        {/*>*/}
                        {/*</MovieItem>*/}
                    {/*)}*/}
                </div>
            </div>
        );
    }
}

export default MovieList;