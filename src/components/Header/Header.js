import React from "react";
import './Header.css';
import Navbar from './../Navbar/Navbar';

function Header() {

    return(
        <div className="header">
            <div className="container">
                <div className="header-title">Movie Search Engine</div>
                    <Navbar />
                </div>
            </div>
        );
};

export default Header;