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
            movieList_showPage: 10,
        }
    }

    changePage(e) {
        e.preventDefault();
        const updateShowPage = Number(e.target.innerHTML);
        console.log(updateShowPage);
        this.setState({
            movieList_showPage: updateShowPage
        });
    }

    render() {
        return (
            <div>
                <Header changePage={this.changePage}/>
                <MovieList page={this.state.movieList_showPage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;