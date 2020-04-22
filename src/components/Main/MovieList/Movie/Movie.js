import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';
import { MoviesContext } from '../../../MoviesProvider';

export const Movie = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <Container>
      <Typography variant="body2" color="textPrimary" align="center">
        Movie show { movies }
      </Typography>

    </Container>
  );
};
