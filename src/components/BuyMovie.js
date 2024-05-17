import React from 'react';
import '../styles/BuyMovie.css';
import {Link} from "react-router-dom";

export function BuyMovie() {
    return (
        <form className="BuyContainer">

                <button className="button-buy">
                    <Link to="/Buy">Comprar</Link>
                </button>

        </form>
    );
}
