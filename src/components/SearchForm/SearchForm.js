import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SearchForm.css';

class SearchForm extends React.Component {

    render() {
        console.log('SearchForm =', this.props);

        return (
            <form className="search-form" onSubmit={this.props.formSubmitHandler}>
                <TextField
                    label="Поиск фильма"
                    name="film"
                    color="primary"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth={true}
                    value={this.props.query}
                    onChange={this.props.handleChange}
                />
                <Button variant="contained" color="primary" onClick={this.props.submitForm}>
                    Поиск
                </Button>
            </form>
        )
    }
}

export default SearchForm