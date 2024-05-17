import React from 'react';
import '../styles/RentMovie.css';
import {Link} from "react-router-dom";

export function RentMovie() {
    return (
        <form className="RentContainer">

            <button className="button-rent">
                <Link to="/Rent">Rentar</Link>
            </button>

        </form>
    );
}