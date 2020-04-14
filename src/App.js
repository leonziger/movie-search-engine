import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";

const api_key = 'ee0f05a0f4bb56e4353f24db8f4f30ef';
const url_discover = "https://api.themoviedb.org/3/discover/movie";
const url_search = "https://api.themoviedb.org/3/search/movie";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query:'',
            startPage: 1,
            totalPages: 1,
            totalResults: 0,
            pages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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

    async fetchMovies(page) {

        const movies = await axios
            .get(url_discover, {
                params: {
                    'api_key': api_key,
                    'language': 'ru-RU',
                    'sort_by': 'popularity.desc',
                    'include_adult': 'false',
                    'include_video': 'false',
                    'primary_release_date.gte': '1900-01-01',
                    'primary_release_date.lte': '2020-01-01',
                    'page': page
                }
            })
            .then(films => films.data )
            .catch(error => this.setState({ error: true }));

        console.log(movies.page);
        console.log(movies.total_pages);
        console.log(movies.results);

        this.setState({
            startPage: movies.pages,
            totalPages: movies.total_pages,
            movies: movies.results
        });

        // const firstPage = document.querySelector('div.navbar-page:nth-child(2)');
        // if( firstPage ) {
        //     firstPage.classList.add('navbar-page_active');
        // }
    }

    changePage = (e) => {
        e.preventDefault();

        const clickedPage = e.target;
        console.log(clickedPage);
        const activePage = document.querySelector('.movie-navbar-page_active');


        if( clickedPage ) {
            activePage && activePage.classList.remove('movie-navbar-page_active');
            clickedPage.classList.add('movie-navbar-page_active');
        }

        const currentPage = Number(clickedPage.innerText);

        //this.fetchMovies(currentPage);
        this.searchMovies(this.state.query, currentPage, this.state.totalPages, this.state.totalResults, this.state.movies);
        this.setState({
            startPage: currentPage
        });
    };

    updatePrevPagesRange = () => {
        const firstPage = this.state.pages[0];
        if ( firstPage >1 ) {
            const prevPagesRange = this.state.pages.map(page => page - 10);

            this.fetchMovies(prevPagesRange[0]);
            this.setState({
                pages : prevPagesRange
            });
        }
    };

    updateNextPagesRange = () => {
        const nextPagesRange = this.state.pages.map(page => page + 10);

        this.fetchMovies(nextPagesRange[0]);
        this.setState({
            pages : nextPagesRange
        });
    };

    componentDidMount() {
        //this.fetchMovies(this.state.startPage);
    };

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded on this page</p> : '';

        return (
            <div>
                <Header
                    formSubmitHandler = {this.formSubmitHandler}
                    submitForm = {this.submitForm}
                />
                {this.state.query ? <MovieList
                                        query= {this.state.query}
                                        currentPage= {this.state.startPage}
                                        totalPages = {this.state.totalPages}
                                        totalResults = {this.state.totalResults}
                                        pages={this.state.pages}
                                        movies={this.state.movies}
                                        changePage={this.changePage}
                                        /> : infoMessage}
                <Footer/>
            </div>
        );
    }
}

export default App;