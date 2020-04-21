import React, { useState } from 'react';
import 'typeface-roboto';
import * as moviesApi from './api/movies';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { Footer } from './components/Footer';
import './App.css';

const App = () => {
  const [ query, setQuery ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ movies, setMovies ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ movie, setMovie ] = useState({});
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

  const searchGenres = (filter = {}) => {
    moviesApi.fetchGenres({
      params: {
        'language': 'ru-RU',
        ...filter
      }
    })
      .then(response => {
        setGenres(response.genres);
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
        handleChange={handleChange}
        formSubmitHandler={formSubmitHandler}
        submitForm={submitForm}
      />

     <div className={ query.length === 0 ? "App-content" : "App-content_clean" }>
      {query
        ?
          <MovieList data={{
              query,
              currentPage,
              totalPages,
              totalResults,
              movies,
              genres,
              error,
              changePage
              // showMovie
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
