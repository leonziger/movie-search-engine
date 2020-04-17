import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';
import axios from "axios";
import 'typeface-roboto';

const api_key = 'ee0f05a0f4bb56e4353f24db8f4f30ef';
const url_search = "https://api.themoviedb.org/3/search/movie";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query:'battle', //поисковой запрос в API
            startPage: 1, //страница, с которой начинает выполянться запрос
            totalPages: 1,  //найдено страниц в API
            totalResults: 0, //найдено результатов в API
            step: 8,
            totalShowPages: 1,
            currentShowPage: 1,
            showPages: [],
            pages : [],
            nextPages : [],
            movies: [] //найдено фильмов в API
        }
    }

    handleChange(e) {
        console.log('handleChange =',e.target);
        this.setState({query: e.target.value});
    }

    formSubmitHandler(e) {
        e.preventDefault();
        return false;
    };

    submitForm = () => {
        console.log('submitForm =', this.state.query);

        if (this.state.query.length >0) {
            this.searchMovies(this.state.query, this.state.startPage, this.state.totalPages, this.state.totalResults, this.state.movies);
        }
    };

    // submitForm = (e) =>{
    //     const query = e.target.closest('.search-form').children[0];
    //     console.log(query);
    //

    // };

    async searchMovies(
        searchQuery, // поисковый запрос в API
        currentPage, //страница запроса в API
        totalPages, //найдено страниц
        totalResults, //найдено результатов
        moviesArray //найденные, по запросу и номеру страницы, фильмы
    ) {
        const movies = await axios
            .get(url_search, {
                params: {
                    'api_key': api_key,
                    'language': 'ru-RU',
                    'include_adult': 'false',
                    'page': currentPage,
                    'query': searchQuery
                }
            })
            .then(films => films.data)
            .catch(error => this.setState({error: true}));

        const arr = [];
        if (movies.total_pages <= this.state.step ) {
            for (let i = 1; i <= movies.total_pages; i++) arr.push(i);
        } else {
            for (let i = 1; i <= this.state.step; i++) arr.push(i);
        }

        const totalShowPages = Math.ceil(movies.total_pages / this.state.step) + 1;

        this.setState({
            query: searchQuery,
            startPage: currentPage,
            totalPages: movies.total_pages,
            totalResults: movies.total_results,
            totalShowPages : totalShowPages,
            pages: arr,
            nextPages : this.state.nextPages.length ===0 ? arr : this.state.nextPages,
            movies: movies.results
        });

        let mass = [];
        let modulo = movies.total_pages % this.state.step;
        let nextPagesRange;

        for (let i = 0; i<totalShowPages-2; i++) {
            nextPagesRange = this.state.nextPages.map(page =>page + i*this.state.step);

            mass.push({ page: i + 1, pages: nextPagesRange });
        }

        nextPagesRange = [];
        for (let i = 0; i < modulo; i++) {
            nextPagesRange.push(this.state.nextPages[i] + (modulo-1)*this.state.step);
        }

        mass.push({ page: totalShowPages-1, pages: nextPagesRange })


        this.setState({
            showPages: mass
        });

    }

    changePage = (e) => {
        e.preventDefault();

        const clickedPage = e.target;
        const activePage = document.querySelector('.movie-navbar-page_active');

        if( clickedPage ) {
            activePage && activePage.classList.remove('movie-navbar-page_active');
            clickedPage.classList.add('movie-navbar-page_active');
        }

        const currentPage = Number(clickedPage.innerText);

        this.searchMovies(this.state.query, currentPage, this.state.totalPages, this.state.totalResults, this.state.movies);
        this.setState({
            startPage: currentPage
        });
    };

    updatePrevPagesRange = () => {
        const firstPage = this.state.pages[0];
        if ( firstPage >1 ) {
            const prevPagesRange = this.state.nextPages.map(page => page - 10);

            //this.searchMovies(this.state.searchQuery, this.state.currentPage, this.state.totalPages, this.state.totalResults, this.state.movies);
            this.setState({
                nextPages : prevPagesRange
            });
        }
    };

    updateNextPagesRange = () => {
        console.log(this.state.showPages);
        let currentShowPage = this.state.currentShowPage;
        let totalShowPages = this.state.totalShowPages;
        console.log('totalShowPages = ', totalShowPages);
        console.log('currentShowPage = ', currentShowPage);
        currentShowPage++;
        let nextPagesRange;

        if (currentShowPage > 1 && currentShowPage < totalShowPages-1) {
            nextPagesRange = this.state.nextPages.map(page => page + this.state.step);

            console.log(this.state.nextPages);
            console.log(nextPagesRange);

            this.setState({
                nextPages : nextPagesRange,
                currentShowPage: currentShowPage
            });
        } else {

        }



        this.searchMovies(this.state.query, nextPagesRange[0], this.state.totalPages, this.state.totalResults, this.state.movies);

    };

    render() {
        const infoMessage = this.state.error ? <p className="App-error">Movies can't be loaded on this page</p> : '';

        return (
            <div>
                <Header
                    query={this.state.query}
                    handleChange = {this.handleChange}
                    formSubmitHandler = {this.formSubmitHandler}
                    submitForm = {this.submitForm}
                />
                 <div className={ this.state.query.length === 0 ? "App-content" : "App-content_clean" }>
                    {this.state.query ? <MovieList data = {this}/> : infoMessage}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;