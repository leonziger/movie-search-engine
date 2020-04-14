import React from "react";
import './SearchForm.css';

class SearchForm extends React.Component {

    render() {
        return (
            <form className="search-form" onSubmit={this.props.formSubmitHandler}>
                <input
                    className="search-form__input"
                    type="text"
                    name="film"
                    placeholder="Введите название фильма"
                />
                <button className="navbar-button search-button" onClick={this.props.submitForm}>Найти</button>
            </form>
        )
    }
}

export default SearchForm