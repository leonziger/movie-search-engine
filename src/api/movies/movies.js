import { api } from '../api';

const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

export const transformMovie = (movie) => {
  movie.poster_path = movie.poster_path && TMDB_IMAGE_URL + movie.poster_path;
  movie.backdrop_path = movie.backdrop_path && TMDB_IMAGE_URL + movie.backdrop_path;
};

const transformGenres = (genres) => {
  return genres.reduce((genres, genre) => ({ ...genres, [genre.id]: genre.name }), {});
};

export const fetchMovies = (config) => {
  return api.get('/search/movie', config)
    .then(({ data }) => {
      data.results.forEach(transformMovie);

      return data;
    })
    .catch((error) => { throw error.data });
};

export const fetchSingleMovie = (id, config) => {
  return api.get('/movie/' + id, config)
    .then(data => {
      transformMovie(data.data);

      return data;
    })
    .catch((error) => { throw error.data });
};

export const fetchGenres = (config) => {
  return api.get('/genre/movie/list', config)
    .then(({ data }) => transformGenres(data.genres))
    .catch((error) => { throw error.data });
};
