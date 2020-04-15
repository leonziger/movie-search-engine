import React from "react";
import './MovieItem.css';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genres : [
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
        }
    }

    decodeGenres = (array) => {
        let items = '', cuttedItems = '';
        array.forEach((item) => {
            this.state.genres.forEach((element)=>{
                if (element.id === item ) {
                    cuttedItems += element.ru_name.toLowerCase() + ', ';
                }
            });
        });
        items = cuttedItems.slice(0, -2);
        return items;
    };

    render() {

        return (
            <div className="col-lg-3 col-md-4 col-sm-6 card">

                <div className="card-img">
                    <img
                        className="card-img-top"
                        alt=""
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.movie.backdrop_path || this.props.movie.poster_path}`}
                    />
                </div>
                <div className="card-body">
                    <div className="card-title">{this.props.movie.title}
                        { isNaN(this.props.movie.release_date) ? " (" + new Date(this.props.movie.release_date).getFullYear()+")" : '' }
                    </div>
                    {this.props.movie.genre_ids.length>0 ? <div className="card-genres"><b>Жанр:&nbsp;</b>{this.decodeGenres(this.props.movie.genre_ids)}</div> : ''}
                    <div className="card-overview">{this.props.movie.overview}</div>
                </div>
            </div>
        );
    }
};

export default MovieItem;