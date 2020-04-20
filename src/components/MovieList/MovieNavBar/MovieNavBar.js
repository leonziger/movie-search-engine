import React from "react";
import { Container, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './MovieNavBar.css';

export const MovieNavBar= (props) => {
    return(
        <Container>
            <Typography variant="body2" color="textPrimary" align="center">
                Найдено {props.totalResults} результатов
            </Typography>
            <Pagination
                page={props.currentPage}
                count={props.totalPages}
                variant="outlined"
                shape="rounded"
                onChange={props.changePage}
            />
        </Container>
    );
};
