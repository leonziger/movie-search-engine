import React, { useState } from 'react';
import axios from 'axios';
import * as moviesApi from './api/movies';
import 'typeface-roboto';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { Footer } from './components/Footer';
import './App.css';

const App = () => {

    const [ query, setQuery ] = useState('star');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ totalResults, setTotalResults ] = useState(0);
    const [ movies, setMovies ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ error, setError ] = useState(false);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        return false;
    };

    const submitForm = () => {
        searchGenres();
        if (query.length >0) {
            searchMovies(query);
        }
    };

    const searchMovies = (filter = {}) => {
        moviesApi.fetchMovies({
                params: {
                    query: query,
                    'language': 'ru-RU',
                    'include_adult': 'false',
                    ...filter
                }
            })
            .then(response => {
                setCurrentPage(response.page);
                setTotalPages(response.total_pages);
                setTotalResults(response.total_results);
                setMovies(response.results);
            })
            .catch(error => setError(true));

    };

    const searchGenres = () => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?', {
            params: {
                'api_key': 'ee0f05a0f4bb56e4353f24db8f4f30ef',
                'language': 'ru-RU'
            }
        })
            .then(response => {
                setGenres(response.data.genres);
            })
            .catch(error => setError(true));

    };

    const changePage = (event, page) => {
        searchMovies({ page });
    };

    const infoMessage = error ? <p className="App-error">Movies can't be loaded on this page</p> : '';

        return (
            <div>
                <Header
                    query={query}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleChange = {handleChange}
                    formSubmitHandler = {formSubmitHandler}
                    submitForm = {submitForm}
                />
                 <div className={ query.length === 0 ? "App-content" : "App-content_clean" }>
                    {query
                        ?
                            <MovieList data = {{
                                                query,
                                                currentPage,
                                                totalPages,
                                                totalResults,
                                                movies,
                                                genres,
                                                error,
                                                changePage
                                            }}
                            />
                        :
                            infoMessage
                    }
                </div>
                <Footer/>
            </div>
        );
};

export default App;