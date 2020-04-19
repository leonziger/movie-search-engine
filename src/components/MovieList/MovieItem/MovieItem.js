import React from "react";
import { genres} from "../../../api/movies";
import './MovieItem.css';

export const MovieItem = (props) => {

    const decodeGenres = (array) => {
        let items = '', cuttedItems = '';
        array.forEach((item) => {
            genres.forEach((element)=>{
                if (element.id === item ) {
                    cuttedItems += element.ru_name.toLowerCase() + ', ';
                }
            });
        });
        items = cuttedItems.slice(0, -2);
        return items;
    };

    return (
        <div className="card">

            <div className="card-img">
                <img
                    className="card-img-top"
                    alt=""
                    src={props.movie.backdrop_path || props.movie.poster_path}
                />
            </div>
            <div className="card-body">
                <div className="card-title">{props.movie.title}
                    { isNaN(props.movie.release_date) ? " (" + new Date(props.movie.release_date).getFullYear()+")" : '' }
                </div>
                {props.movie.genre_ids.length>0 ? <div className="card-genres"><b>Жанр:&nbsp;</b>{decodeGenres(props.movie.genre_ids)}</div> : ''}
                <div className="card-overview">{props.movie.overview}</div>
            </div>
        </div>
    );
};
