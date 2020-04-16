import React from "react";
import './MovieNavBar.css';

class MovieNavBar extends React.Component {

    render() {

        return (

            <div>
                <div className="movie-search-result">По запросу "{this.props.query}" найдено {this.props.totalResults} результатов ({this.props.totalPages} страниц)</div>
                <div className="movie-navbar">

                    {
                        this.props.totalPages > 10 && this.props.currentPage > 10
                        ? <div className="movie-navbar-buttons"><button className="movie-navbar-button prev-button" onClick={this.props.updatePrevPagesRange}>пред 10 стр.</button></div>
                        : <div className="movie-navbar-buttons"><div> Страницы: </div></div>
                    }

                    <div className="movie-navbar-pages">{
                        this.props.pages.map(
                            page =>
                                page === this.props.currentPage
                                ?
                                    <div className="movie-navbar-page movie-navbar-page_active" key={page}>{page}</div>
                                :
                                    <div className="movie-navbar-page" key={page} onClick={this.props.changePage}>{page}</div>
                        )}
                    </div>
                    {
                        this.props.totalPages > 10
                            ?
                                <div className="movie-navbar-buttons">
                                    <button className="movie-navbar-button next-button" onClick={this.props.updateNextPagesRange}>след 10 стр.</button>
                                </div>
                            : ''
                    }
                </div>

            </div>
        )
    }
}

export default MovieNavBar;