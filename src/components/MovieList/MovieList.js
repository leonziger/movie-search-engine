import React from 'react';
import MovieNavBar from "./MovieNavBar/MovieNavBar";
import MovieItem from "./MovieItem/MovieItem";
import Container from '@material-ui/core/Container';

class MovieList extends React.Component {

    render() {

        return (
            <Container>
                {this.props.data.state.totalResults > 0
                    ? <div>
                        <MovieNavBar
                            query={this.props.data.state.query}
                            currentPage={this.props.data.state.startPage}
                            totalPages={this.props.data.state.totalPages}
                            totalResults={this.props.data.state.totalResults}
                            pages={this.props.data.state.totalPages <= 10 ? this.props.data.state.pages : this.props.data.state.nextPages}
                            changePage={this.props.data.changePage}
                            updatePrevPagesRange = {this.props.data.updatePrevPagesRange}
                            updateNextPagesRange = {this.props.data.updateNextPagesRange}
                        />
                        <div className="row">
                            {this.props.data.state.movies.map(movie =>
                                <MovieItem key={movie.id} movie={movie}/>
                            )}
                        </div>
                    </div>
                    :
                    <div className="movie-search-nothing">По данному запросу ничего не найдено</div>
                }
            </Container>
        );
    }
}

export default MovieList;