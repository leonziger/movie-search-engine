import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";
import 'typeface-roboto';


const api_key = 'ee0f05a0f4bb56e4353f24db8f4f30ef';
const url_search = "https://api.themoviedb.org/3/search/movie";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query:'',
            startPage: 1,
            totalPages: 1,
            totalResults: 0,
            pages : [],
            nextPages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            movies: []
        }
    }

    formSubmitHandler(e) {
        e.preventDefault(); //should prevent submit, and continue below?
        return false;
    }

    submitForm = (e) =>{
        const query = e.target.closest('.search-form').children[0].value;

        if (query.length >0) {
            this.searchMovies(query, this.state.startPage, this.state.totalPages, this.state.totalResults, this.state.movies);
        }
    };

    async searchMovies(searchQuery, currentPage, totalPages, totalResults, moviesArray) {
        const movies = await axios
            .get(url_search, {
                params: {
                    'api_key': api_key,
                    'language': 'ru-RU',
                    'include_adult': 'false',
                    'page': currentPage,
                    'query': searchQuery
                }
            })
            .then(films => films.data )
            .catch(error => this.setState({ error: true }));

        const arr=[];
        for (let i=1; i <= movies.total_pages; i++) {
            arr.push(i);
        }

        this.setState({
            query: searchQuery,
            startPage: currentPage,
            totalPages: movies.total_pages,
            totalResults: movies.total_results,
            pages: arr,
            movies: movies.results
        });
    }

    changePage = (e) => {
        e.preventDefault();

        const clickedPage = e.target;
        const activePage = document.querySelector('.movie-navbar-page_active');

        if( clickedPage ) {
            activePage && activePage.classList.remove('movie-navbar-page_active');
            clickedPage.classList.add('movie-navbar-page_active');
        }

        const currentPage = Number(clickedPage.innerText);

        this.searchMovies(this.state.query, currentPage, this.state.totalPages, this.state.totalResults, this.state.movies);
        this.setState({
            startPage: currentPage
        });
    };

    updatePrevPagesRange = () => {
        const firstPage = this.state.pages[0];
        if ( firstPage >1 ) {
            const prevPagesRange = this.state.nextPages.map(page => page - 10);

            //this.searchMovies(this.state.searchQuery, this.state.currentPage, this.state.totalPages, this.state.totalResults, this.state.movies);
            this.setState({
                nextPages : prevPagesRange
            });
        }
    };

    updateNextPagesRange = () => {
        console.log(this.state);
        let nextPagesRange, nextRange, modulo;
        let difference = this.state.totalPages - (this.state.startPage + 10);

        if (this.state.startPage < this.state.totalPages - 10)  {
            if ( difference > 10) {
                nextPagesRange = this.state.nextPages.map(page =>page+10);
                nextRange= this.state.startPage + 10;
            } else {
                modulo = this.state.totalPages % 10;
                nextPagesRange = [];
                for (let i = 0; i < modulo; i++) {
                    nextPagesRange[i] = this.state.startPage + 10 + i;
                }
                nextRange= this.state.startPage + 10 + difference;
            }

            this.searchMovies(this.state.query, nextPagesRange[0], this.state.totalPages, this.state.totalResults, this.state.movies)
            this.setState({
                startPage : nextRange,
                nextPages : nextPagesRange
            });
        }

    };

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded on this page</p> : '';

        return (
            <div>
                <Header
                    formSubmitHandler = {this.formSubmitHandler}
                    submitForm = {this.submitForm}
                />
                 <div className={ this.state.query.length === 0 ? "App-content" : "App-content_clean" }>
                    {this.state.query ? <MovieList
                                            data = {this}
                                            // query= {this.state.query}
                                            // currentPage= {this.state.startPage}
                                            // totalPages = {this.state.totalPages}
                                            // totalResults = {this.state.totalResults}
                                            // pages={this.state.pages}
                                            // nextPages={this.state.nextPages}
                                            // movies={this.state.movies}
                                            // changePage={this.changePage}
                                            // updatePrevPagesRange = {this.updatePrevPagesRange}
                                            // updateNextPagesRange = {this.updateNextPagesRange}
                                            /> : infoMessage}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;