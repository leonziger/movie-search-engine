import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";

const api_key = 'ee0f05a0f4bb56e4353f24db8f4f30ef';
const url_discover = "https://api.themoviedb.org/3/discover/movie";
//const url_search = "https://api.themoviedb.org/3/search/movie";
//https://api.themoviedb.org/3/search/movie?api_key=ee0f05a0f4bb56e4353f24db8f4f30ef&language=en-US&page=1&include_adult=false&query=Batman

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            startPage: 1,
            pages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            movies: []
        }
    }

    async fetchMovies(page) {

        const movies = await axios
            .get(url_discover, {
                params: {
                    'api_key': api_key,
                    'language': 'ru-RU',
                    'sort_by': 'popularity.desc',
                    'include_adult': 'false',
                    'include_video': 'false',
                    'primary_release_date.gte': '1900-01-01',
                    'primary_release_date.lte': '2020-01-01',
                    'page': page
                }
            })
            .then(films => films.data.results )
            .catch(error => this.setState({ error: true }));

        this.setState({
            movies: movies
        });

        // const firstPage = document.querySelector('div.navbar-page:nth-child(2)');
        // if( firstPage ) {
        //     firstPage.classList.add('navbar-page_active');
        // }
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
            startPage: currentPage
        });
    };

    updatePrevPagesRange = () => {
        const firstPage = this.state.pages[0];
        if ( firstPage >1 ) {
            const prevPagesRange = this.state.pages.map(page => page - 10);

            this.fetchMovies(prevPagesRange[0]);
            this.setState({
                pages : prevPagesRange
            });
        }
    };

    updateNextPagesRange = () => {
        const nextPagesRange = this.state.pages.map(page => page + 10);

        this.fetchMovies(nextPagesRange[0]);
        this.setState({
            pages : nextPagesRange
        });
    };

    componentDidMount() {
        this.fetchMovies(this.state.startPage);
    };

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded on this page</p> : 'Loading...';

        return (
            <div>
                <Header
                    pages={this.state.pages}
                    changePage={this.changePage}
                    updatePrevPagesRange={this.updatePrevPagesRange}
                    updateNextPagesRange={this.updateNextPagesRange}
                />
                {this.state.movies ? <MovieList movies={this.state.movies}/> : infoMessage}
                <Footer/>
            </div>
        );
    }
}

export default App;