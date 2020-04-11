import React from 'react';
import MovieItem from "./MovieItem/MovieItem";
import axios from "axios";

class MovieList extends React.Component {
         state = {
            movies: []
        }

    async componentDidMount(props) {
        const currentPage = this.props.page;
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=ee0f05a0f4bb56e4353f24db8f4f30ef&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page="+currentPage;
        const movies = await axios.get(
            url
        );
        const films = movies.data.results;
        // console.log(movies);
        this.setState({ movies: films });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.movies.map(movie =>
                        <MovieItem key={movie.id} movie={movie}
                        >
                        </MovieItem>
                    )}
                </div>
            </div>
        );
    }
}

export default MovieList;