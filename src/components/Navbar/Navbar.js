import React from "react";
import './Navbar.css';

class Navbar extends React.Component {

    render() {
        return (

            <div className="container">
                <div className="navbar">

                    <span className="navbar-title">Pages:</span> {
                        this.props.pages.map(
                            page =>
                                <div className="navbar-page" key={page}
                                     onClick={this.props.changePage}
                                >
                                    {page}
                                </div>

                        )}

                </div>
                <div className="navbar-buttons">
                    <button className="navbar-button prev-button" onClick={this.props.updatePrevPagesRange}>Prev 10 pages</button>
                    <button className="navbar-button next-button" onClick={this.props.updateNextPagesRange}>Next 10 pages</button>
                </div>
            </div>
        );
    }
}

export default Navbar;