import React from "react";
import './Header.css';
import SearchForm from "../SearchForm/SearchForm";

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="container">
                    <a className="header-title" href="/">Movie Search Engine</a>
                    <SearchForm
                        formSubmitHandler={this.props.formSubmitHandler}
                        submitForm={this.props.submitForm}
                    />
                </div>
            </div>
        );
    }
};

export default Header;