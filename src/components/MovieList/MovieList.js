import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { MovieNavBar } from "./MovieNavBar";
import { MovieItem  } from "./MovieItem";

export const MovieList = (props) => {

    return (
        <Container>

            {props.data.state.totalResults > 0
                ? <div>
                    <MovieNavBar
                        query={props.data.state.query}
                        currentPage={props.data.state.startPage}
                        totalPages={props.data.state.totalPages}
                        totalResults={props.data.state.totalResults}
                        changePage={props.data.changePage}
                    />
                        <Grid container spacing={4}>
                            {props.data.state.movies.map(movie =>
                                <Grid item lg={3} md={4} sm={6} key={movie.id}>
                                    <MovieItem key={movie.id} movie={movie}/>
                                </Grid>
                            )}
                        </Grid>
                </div>
                :
                <div className="movie-search-nothing">По данному запросу ничего не найдено</div>
            }
        </Container>
    );
};
