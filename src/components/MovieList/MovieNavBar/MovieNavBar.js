import React from "react";
import './MovieNavBar.css';

class MovieNavBar extends React.Component {

    render() {
        console.log('MovieNavBar = ',this.props);

        return (

            <div>
                <div className="movie-search-result">По запросу "{this.props.query}" найдено {this.props.totalResults} результатов </div>
                <div className="movie-navbar">

                        <span className="movie-navbar-title">Страницы:</span> {
                    this.props.pages.map(
                        page =>
                            page === this.props.startPage
                            ?
                                <div className="movie-navbar-page movie-navbar-page_active" key={page}>{page}</div>
                            :
                                <div className="movie-navbar-page" key={page} onClick={this.props.changePage}>{page}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default MovieNavBar;