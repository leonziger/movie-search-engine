import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { MoviesProvider } from '../../../MoviesProvider';
import { Header } from '../../../Header';
import { Footer } from '../../../Footer';

export const Movie = () => {
  const movie = useParams();
  console.log('movie', movie);

  return (
    <Router>
      <MoviesProvider>
        <Header />
        <Container>
          <h3>Echo  echo</h3>
        </Container>
        <Footer />
      </MoviesProvider>
    </Router>
  );
};
