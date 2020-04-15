import React from "react";
import './Header.css';
import SearchForm from "../SearchForm/SearchForm";
import AppBar from "@material-ui/core/AppBar";

class Header extends React.Component {

    render() {
        return (
            <AppBar position="fixed">
                <div className="header">
                    <div className="container">
                        <a className="header-title" href="/">Movie Search Engine</a>
                        <SearchForm
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