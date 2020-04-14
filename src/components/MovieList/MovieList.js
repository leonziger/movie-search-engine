import React from 'react';
import MovieNavBar from "./MovieNavBar/MovieNavBar";
import MovieItem from "./MovieItem/MovieItem";

class MovieList extends React.Component {

    componentDidMount() {
        console.log('MovieList = ',this.props);
    }

    render() {
        return (
            <div className="container">
                {this.props.totalResults > 0
                    ? <div>
                        <MovieNavBar
                            query={this.props.query}
                            currentPage={this.props.startPage}
                            totalPages={this.props.totalPages}
                            totalResults={this.props.totalResults}
                            pages={this.props.pages}
                            changePage={this.props.changePage}
                        />
                        <div className="row">
                            {this.props.movies.map(movie =>
                                <MovieItem key={movie.id} movie={movie}/>
                            )}
                        </div>
                    </div>
                    :
                    <div className="movie-search-nothing">По данному запросу ничего не найдено</div>
                }
            </div>
        );
    }
}

export default MovieList;