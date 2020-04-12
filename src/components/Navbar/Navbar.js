import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }

    updatePrevPagesRange() {
        const prevPagesRange = this.state.pages.map(page => page - 10);


        this.setState({
            pages : prevPagesRange
        });
    }

    updateNextPagesRange() {
        const nextPagesRange = this.state.pages.map(page => page + 10);

        console.log(this.state.pages);
        this.setState({
            pages : nextPagesRange
        });
    }


render() {
        return (

            <div className="container">
                <div className="navbar">
                    <span className="navbar-title">Pages:</span> {
                        this.state.pages.map(
                            page =>
                                <div className="navbar-page" key={page}
                                     onClick={this.props.changePage}
                                >
                                    {page}
                                </div>

                        )}
                    <button className="navbar-button next-button" onClick={this.updateNextPagesRange}>Next 10 pages</button>
                </div>
            </div>
        );
    }
}

export default Navbar;