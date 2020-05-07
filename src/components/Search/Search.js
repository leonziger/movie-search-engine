import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { MoviesContext } from '../MoviesProvider';
import { SearchForm } from '../SearchForm';
import { Main } from '../Main';

export const Search = () => {
  const { setMainBackground } = useContext(MoviesContext);
  setMainBackground(false);

  return (
    <Container>
        <SearchForm />
        <Main />
    </Container>
  );
};
