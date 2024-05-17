import React, { useEffect, useState} from "react";
import "../styles/MovieList.css"
import { get } from "../util/httpClient";
import {MovieCard} from "./MovieCard";

export function MovieList () {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);
    return (

            <ul className="movie-list">
                {Movies.map((Movie) => (
                    <MovieCard key={Movie.id} Movie={Movie}/>
                ))}
            </ul>

    );
}