import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-roboto';
import { MoviesProvider } from './components/MoviesProvider';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Movie } from './components/Movie';
import './App.css';

export const App = () => {
  return (
    <MoviesProvider>
      <Header />
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/movie-search-engine" component={Main} />
        <Route path="/movie/:id" component={Movie} />
      </Router>
      <Footer />
    </MoviesProvider>
  );
};

