import React, { useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { MoviesContext } from '../MoviesProvider';
import { SearchForm } from '../SearchForm';
import { Main } from '../Main';

export const Search = () => {
  const { setMainBackground } = useContext(MoviesContext);

  useEffect(() => {
    setMainBackground(false);
  });

  return (
    <Container>
      <SearchForm />
      <Main />
    </Container>
  );
};
