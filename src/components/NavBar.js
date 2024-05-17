import React from 'react';
import "../styles/NavBar.css";
import {SearchBar} from "./SearchBar";

export const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-container">
                <ul className="nav-menu">

                    <li className="nav-item">


                        <a href="#" className="nav-links">Acción</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Aventura</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Animación</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Ciencia Ficción</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Drama</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Familia</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Fantasia</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Misterio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Romance</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Suspenso</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
