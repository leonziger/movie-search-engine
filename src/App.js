import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieList_showPage: 1,
            movies: []
        }

        this.fetchMovies(this.state.movieList_showPage);
    }

    async fetchMovies(page) {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=ee0f05a0f4bb56e4353f24db8f4f30ef&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page;
        const movies = await axios.get(
            url
        );
        const films = movies.data.results;

        this.setState({
            movies: films
        });
        console.log('this.state.movies',this.state.movies);
    }

    changePage = (e) => {
        e.preventDefault();
        const updateShowPage = Number(e.target.innerHTML);
        console.log(updateShowPage);
        this.setState({
            movieList_showPage: updateShowPage
        });

        this.fetchMovies(this.state.movieList_showPage);
    }

    render() {
        return (
            <div>
                <Header changePage={this.changePage}/>
                <MovieList movies={this.state.movies}/>
                <Footer/>
            </div>
        );
    }
}

export default App;