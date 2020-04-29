import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { MoviesContext } from '../../MoviesProvider';
import { MovieNavBar } from './MovieNavBar';
import { MovieItem } from './MovieItem';
import { Loader } from '../../Loader';
import mainBgImage from '../../../mainbg.jpg';

const useStyles = makeStyles({
  main: {
    backgroundImage: `url(${mainBgImage})`,
    backgroundPosition: 'center',
    minHeight: '1080px'
  },
  clean: {
    background: 'none',
    minHeight: '1080px',
    margin: '20px'
  }
});

export const MovieList = () => {
  const { movies, totalResults, isLoading } = useContext(MoviesContext);
  const classes = useStyles();

  return (
    <div className="movielist">
      {isLoading ?
        <Container>
          <div className={classes.clean}>
            <Loader/>
          </div>
        </Container>
      :
        <div className="movielist__search-results">
          {movies.length > 0 ?
            <Container>
              <div className={classes.clean}>
                <MovieNavBar/>

                <Grid container spacing={4}>
                  {movies.map(movie =>
                    <Grid item lg={3} md={4} sm={6} key={movie.id}>
                      <MovieItem movie={movie}/>
                    </Grid>
                  )}
                </Grid>
              </div>
            </Container>
          :
            <div className={classes.main}></div>
          }
        </div>
      }
    </div>
  );
};
