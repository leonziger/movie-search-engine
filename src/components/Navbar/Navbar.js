import React from "react";
import './Navbar.css';

export const Navbar = (props) => {
    return (
        <div className="container">
            <div className="navbar">
                <span className="navbar-title">Pages:</span> {
                    props.pages.map(
                        page =>
                            <div className="navbar-page" key={page}
                                 onClick={props.changePage}
                            >
                                {page}
                            </div>
                    )}
            </div>
        </div>
    );
};
