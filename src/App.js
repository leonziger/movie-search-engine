import React from 'react';
import 'typeface-roboto';
import { MoviesProvider } from './components/MoviesProvider';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <MoviesProvider>
      <Header />
      <Main />
      <Footer />
    </MoviesProvider>
  );
};
