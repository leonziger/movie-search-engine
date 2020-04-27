import React, { useContext } from 'react';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import { MoviesContext } from '../MoviesProvider';
import { MovieList } from './MovieList';
import { Loader } from '../Loader';

export const Main = () => {
  const { movies, error } = useContext(MoviesContext);
  const { isLoading } = useContext(MoviesContext);

  return (
    <div>
      <Loader loading={isLoading}>
        {movies ?
          <MovieList />
        :
          error && <Typography align="center" color="error" variant="subtitle1" justify="center" component="p">Movies can't be loaded on this page</Typography>
        }
      </Loader>
    </div>
  );
};
