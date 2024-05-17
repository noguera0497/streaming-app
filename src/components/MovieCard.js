import React from 'react';
import "../styles/MovieCard.css"
import { Link } from 'react-router-dom';





export const MovieCard = ({Movie}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + Movie.poster_path;

    return (
        <div className="movie-card">

            <li>
                <Link to={`/movies/${Movie.id}`}>

                <img src={imageUrl} alt={Movie.title}/>
                {Movie.title}
                </Link>
            </li>

        </div>
    );

};