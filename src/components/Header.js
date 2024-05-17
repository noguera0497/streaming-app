import React from "react";
import "../styles/Header.css"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header-footer">

            <h1 className="header-footer-text">
                <Link to="/">Movies Streaming App</Link>
                </h1>
        </header>
    );
}