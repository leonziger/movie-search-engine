import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";

const url = "https://api.themoviedb.org/3/discover/movie";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movieList_startPage: 600,
            movies: []
        }
    }

    async fetchMovies(page) {
        this.setState({
            isLoading: true
        });

        const movies = await axios
            .get(url, {
                params: {
                    'api_key': 'ee0f05a0f4bb56e4353f24db8f4f30ef',
                    'language': 'ru-RU',
                    'sort_by': 'popularity.desc',
                    'include_adult': 'false',
                    'include_video': 'false',
                    'page': page
                }
            })
            .then(films => {
                this.setState({ isLoading: false });
                return films.data.results;
            })
            .catch(error => this.setState({ error: true }));

        this.setState({
            movies: movies
        });
    }


    changePage = (e) => {
        e.preventDefault();

        const clickedPage = e.target;
        const activePage = document.querySelector('.navbar-page_active');

        if( clickedPage ) {
            activePage && activePage.classList.remove('navbar-page_active');
            clickedPage.classList.add('navbar-page_active');
        }

        const currentPage = Number(clickedPage.innerText);

        this.fetchMovies(currentPage);
        this.setState({
            movieList_startPage: currentPage
        });

    }

    componentDidMount() {
        this.fetchMovies(this.state.movieList_startPage);
    }

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded from {this.state.movieList_startPage}s page</p> : 'Loading...';

        return (
            <div>
                <Header changePage={this.changePage}/>
                {this.state.movies ? <MovieList movies={this.state.movies}/> : infoMessage}
                <Footer/>
            </div>
        );
    }
}

export default App;