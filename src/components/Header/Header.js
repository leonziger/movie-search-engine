import React from "react";
import './Header.css';
import Navbar from './../Navbar/Navbar';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
        console.log('Header props', this.props)
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-title">Movie Search Engine</div>
                    <Navbar changePage={this.props.changePage}/>
                </div>
            </div>
        );
    }
};

export default Header;