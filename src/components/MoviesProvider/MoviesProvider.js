import React, { useState, useEffect } from 'react';
import * as moviesApi from '../../api/movies';
import Preloader from '../Preloader';

const initialValues = {
  filter: {
    query: '',
    page: 1,
    include_adult: false
  }
};

export const MoviesContext = React.createContext({});

export const MoviesProvider = ({ children }) => {
  const [ filter, setFilter ] = useState(initialValues.filter);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ movies, setMovies ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ isFetching, setFetching ] = useState(false);

  const searchMovies = (newFilter = {}) => {
    if ( newFilter.query && newFilter.query.length <= 1) {
      setMovies([]);
      setTotalPages(0);
      setTotalResults(0);

      return;
    }

    moviesApi.fetchMovies({
      params: {
        ...filter, ...newFilter
      }
    })
      .then(response => {
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
        setMovies(response.results);
        setFilter((filter) => ({ ...filter, ...newFilter, page: response.page }));
      })
      .catch(error => setError(true));
  };

  const searchGenres = (filter = {}) => {
    moviesApi.fetchGenres({
      params: {
        ...filter
      }
    })
      .then(setGenres)
      .catch(error => setError(true));
  };

  const changePage = (event, page) => {
    searchMovies({ page });
  };

  const providerValue = {
    filter,
    totalPages,
    totalResults,
    movies,
    genres,
    error,
    isFetching,

    // functions
    searchMovies,
    changePage,
    setFetching
  };

  useEffect(() => {
    searchGenres();
  }, []);

  return (
    <MoviesContext.Provider value={providerValue}>
      {children}
    </MoviesContext.Provider>
  );
};
