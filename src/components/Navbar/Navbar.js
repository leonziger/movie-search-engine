import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }

    render() {
        return (

            <div className="container">
                <div className="navbar">
                    <span className="navbar-title">Pages:</span> {
                        this.state.pages.map(
                            page =>
                                <div className="navbar-pages" key={page}
                                     onClick={this.props.changePage}
                                >
                                    {page}
                                </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Navbar;