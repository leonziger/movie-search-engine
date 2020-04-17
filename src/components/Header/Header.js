import React from "react";
import './Header.css';
import SearchForm from "../SearchForm/SearchForm";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {

    render() {
        console.log('Header', this);
        return (
            <AppBar position="fixed">
                <div className="header">
                    <div className="container">
                        <Typography variant="h1" component="h2">
                            <a className="header-title" href="/">Movie Search Engine</a>
                        </Typography>
                        <SearchForm
                            query={this.props.query}
                            onChange = {this.props.handleChange}
                            formSubmitHandler={this.props.formSubmitHandler}
                            submitForm={this.props.submitForm}
                        />
                    </div>
                </div>
            </AppBar>
        );
    }
};

export default Header;