import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { MovieNavBar } from "./MovieNavBar";
import { MovieItem  } from "./MovieItem";

export const MovieList = (props) => {

    return (
        <Container>
            {props.data.totalResults > 0
                ? <div>
                    <MovieNavBar
                        query={props.data.query}
                        currentPage={props.data.startPage}
                        totalPages={props.data.totalPages}
                        totalResults={props.data.totalResults}
                        changePage={props.data.changePage}
                    />
                        <Grid container justify="center" spacing={4}>
                            {props.data.movies.map(movie =>
                                <Grid item lg={3} md={4} sm={6} key={movie.id}>
                                    <MovieItem key={movie.id} movie={movie} genres={props.data.genres}/>
                                </Grid>
                            )}
                        </Grid>
                </div>
                :
                <Typography align="center" color="error" variant="subtitle1" justify="center" component="p">
                    По данному запросу ничего не найдено
                </Typography>
            }
        </Container>
    );
};
