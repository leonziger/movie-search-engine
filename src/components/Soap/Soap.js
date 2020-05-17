import React, { useContext, useEffect } from 'react';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import { MoviesContext } from '../MoviesProvider';
import { MovieList } from '../Main/MovieList';

export const Soap = () => {
  const { movies, error, setMainBackground } = useContext(MoviesContext);

  useEffect(() => {
    setMainBackground(true);
  });

  return (
    <div className="main">
      {movies ?
        <MovieList />
        :
        error && <Typography align="center" color="error" variant="subtitle1" justify="center" component="p">Movies can't be loaded on this page</Typography>
      }
    </div>
  );
};
