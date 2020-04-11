import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            page: 1
        }
    }

    changePage

    render() {
        return (
            <div>
                <Header/>
                <MovieList page={this.state.page}/>
                <Footer/>
            </div>
        );
    }
}

export default App;