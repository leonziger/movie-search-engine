import React from "react";
import './MovieItem.css';

function MovieItem(props) {

    return(
        <div className="col-md-4 col-sm-6 card">

            <img
                className="card-img-top"
                alt=""
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.movie.backdrop_path || props.movie.poster_path}`}
                />
                <div className="card-body">
                    <div className="card-title">{props.movie.title}</div>
                        <div className="card-overview">{props.movie.overview}</div>
               </div>
            </div>
        );
};

export default MovieItem;