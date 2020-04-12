import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";

class App extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            firstLoad: true,
            movieList_showPage: 10,
            movies: []
        }
    }

    async fetchMovies(page) {
        const url = "https://api.themoviedb.org/3/discover/movie";
        const movies = await axios.get(url, {
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
                return films.data.results;
            });

        this.setState({
            movies: movies
        });
    }

    changePage = (e) => {
        e.preventDefault();
        const currentPage = Number(e.target.innerHTML);
        console.log(currentPage);
        this.setState({
            firstLoad: false,
            movieList_showPage: currentPage
        });
        console.log('first load', this.state.firstLoad);
        this.fetchMovies(this.state.movieList_showPage);
    }

    componentDidMount() {
        if (this.state.firstLoad) {
            console.log('first load', this.state.firstLoad);
            this.fetchMovies(this.state.movieList_showPage);
        }
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