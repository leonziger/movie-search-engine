import React from 'react';
import * as moviesApi from './api/movies';
import 'typeface-roboto';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { Footer } from './components/Footer';
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.findFilm = React.createRef()

        this.state = {
            query:'star', //поисковой запрос в API
            currentPage: 1, //страница, с которой начинает выполянться запрос
            totalPages: 0,  //найдено страниц в API
            totalResults: 0, //найдено результатов в API
            movies: [] //найдено фильмов в API
        }

    }

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    formSubmitHandler(event) {
        event.preventDefault();
        return false;
    };

    submitForm = () => {
        if (this.state.query.length >0) {
            this.searchMovies(this.state.query);
        }
    };

    searchMovies = (filter = {}) => {
        moviesApi.fetchMovies({
                params: {
                    query:this.state.query,
                    'language': 'ru-RU',
                    'include_adult': 'false',
                    ...filter
                }
            })
            .then(response => {
                this.setState({
                    totalPages: response.total_pages,
                    totalResults: response.total_results,
                    movies: response.results,
                    ...filter
                });
            })
            .catch(error => this.setState({error: true}));

    };

    changePage = (event, page) => {

        this.searchMovies({ page });
    };

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded on this page</p> : '';

        return (
            <div>
                <Header
                    query={this.state.query}
                    page={this.state.page}
                    totalPages={this.state.totalPages}
                    handleChange = {this.handleChange}
                    formSubmitHandler = {this.formSubmitHandler}
                    submitForm = {this.submitForm}
                />
                 <div className={ this.state.query.length === 0 ? "App-content" : "App-content_clean" }>
                    {this.state.query ? <MovieList data = {this}/> : infoMessage}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;