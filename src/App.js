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
            startPage: 1,
            pages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            movies: []
        }
    }

    async fetchMovies(page) {

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
            .then(films => films.data.results )
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