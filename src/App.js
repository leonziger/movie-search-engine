import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'typeface-roboto';
import { MoviesProvider } from './components/MoviesProvider';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Movie } from './components/Movie';
import { Soap } from './components/Soap';
import { Search } from './components/Search';
import './App.css';

export const App = () => {
  return (
    <MoviesProvider>
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/movie-search-engine" exact component={Main} />
            <Route path="/movies" component={Main} />
            <Route path="/soap" component={Soap} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Movie} />
            <Redirect to="/" />
          </Switch>
        <Footer />
      </Router>
    </MoviesProvider>
  );
};

