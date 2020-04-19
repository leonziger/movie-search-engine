import React from "react";
import Pagination from '@material-ui/lab/Pagination';
import './MovieNavBar.css';

export const MovieNavBar= (props) => {

    return(
        <div className="movie-search__container">
            <div className="movie-search-result">По запросу "{props.query}" найдено {props.totalResults} результатов</div>
            <Pagination
                page={props.page}
                count={props.totalPages}
                variant="outlined"
                shape="rounded"
                onChange={props.changePage}
            />
        </div>
    );
};
