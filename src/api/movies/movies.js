import { api } from '../api';

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


