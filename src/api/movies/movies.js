import { api } from '../api';
import axios from "axios/index";

const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

const transformMovie = (movie) => {
  movie.poster_path = TMDB_IMAGE_URL + movie.poster_path;
  movie.backdrop_path = TMDB_IMAGE_URL + movie.backdrop_path;
};

export const fetchMovies = (config) => {
  return api.get('/search/movie', config)
    .then(({ data }) => {
      data.results.forEach(transformMovie);

      return data;
    })
    .catch((error) => { throw error.data });
};

export const fetchGenres = (config) => {
  return api.get('/genre/movie/list?', config)
    .then(({ data }) => data )
    .catch((error) => { throw error.data });
};
