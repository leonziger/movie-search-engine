import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { MoviesContext } from '../../MoviesProvider';
import { MovieNavBar } from './MovieNavBar';
import { MovieItem } from './MovieItem';
import { Loader } from '../../Loader';
import mainBgImage from '../../../mainbg.jpg';

const useStyles = makeStyles({
  main: {
    backgroundImage: `url(${mainBgImage})`,
    backgroundPosition: 'center',
    minHeight: '500px'
  },
  clean: {
    background: 'none',
    minHeight: '500px',
    margin: '20px'
  }
});

export const MovieList = () => {
  const { movies, totalResults, isLoading } = useContext(MoviesContext);
  const classes = useStyles();

  return (
    <div className={classes.clean}>
      <Container>
        {totalResults > 0 ?
          <div>
            <MovieNavBar/>
            <Loader loading={isLoading}>
              <Grid container spacing={4}>
                {movies.map(movie =>
                  <Grid item lg={3} md={4} sm={6} key={movie.id}>
                    <MovieItem movie={movie}/>
                  </Grid>
                )}
              </Grid>
            </Loader>
          </div>
        :
          <div>
            <Typography align="center" color="error" variant="subtitle1" justify="center" component="p">
              По данному запросу ничего не найдено
            </Typography>
          </div>
        }
      </Container>
    </div>
  );
};
