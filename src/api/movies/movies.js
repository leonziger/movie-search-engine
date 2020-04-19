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

export const genres = [
    {
        "id": 28,
        "name": "Action",
        "ru_name": "Экшн"
    },
    {
        "id": 12,
        "name": "Adventure",
        "ru_name": "Приключения"
    },
    {
        "id": 16,
        "name": "Animation",
        "ru_name": "Анимация"
    },
    {
        "id": 35,
        "name": "Comedy",
        "ru_name": "Комедия"
    },
    {
        "id": 80,
        "name": "Crime",
        "ru_name": "Криминал"
    },
    {
        "id": 99,
        "name": "Documentary",
        "ru_name": "Документальный"
    },
    {
        "id": 18,
        "name": "Drama",
        "ru_name": "Драма"
    },
    {
        "id": 10751,
        "name": "Family",
        "ru_name": "Семейный"
    },
    {
        "id": 14,
        "name": "Fantasy",
        "ru_name": "Фентези"
    },
    {
        "id": 36,
        "name": "History",
        "ru_name": "Исторический"
    },
    {
        "id": 27,
        "name": "Horror",
        "ru_name": "Ужасы"
    },
    {
        "id": 10402,
        "name": "Music",
        "ru_name": "Музыкальный"
    },
    {
        "id": 9648,
        "name": "Mystery",
        "ru_name": "Мистика"
    },
    {
        "id": 10749,
        "name": "Romance",
        "ru_name": "Романтический"
    },
    {
        "id": 878,
        "name": "Science Fiction",
        "ru_name": "Научная фантастика"
    },
    {
        "id": 10770,
        "name": "TV Movie",
        "ru_name": "телефильм"
    },
    {
        "id": 53,
        "name": "Thriller",
        "ru_name": "триллер"
    },
    {
        "id": 10752,
        "name": "War",
        "ru_name": "Военный"
    },
    {
        "id": 37,
        "name": "Western",
        "ru_name": "Вестерн"
    }
]