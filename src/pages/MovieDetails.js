import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Burden } from "../components/Burden";
import { get } from "../util/httpClient";
import TrailerPlayer from "../components/TrailerPlayer";
import { useTrailer } from "../hooks/useTrailer";
import {BuyMovie} from "../components/BuyMovie";
import {RentMovie} from "../components/RentMovie";

import "../styles/MovieDetails.css";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);

    const { trailerKey, error } = useTrailer(movieId);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        }).catch((error) => {
            console.error("Error al obtener los detalles de la película:", error);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Burden />;
    }



    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <div className="detailsContainer">

            <div className="movie">

                <img src={imageUrl} alt={movie.title} className="movieImage"/>
                <div className="buttons-movie">

                    <button className="trailerButton" onClick={() => setShowTrailer(true)}>
                        Reproducir
                    </button>
                    <BuyMovie/>
                    <RentMovie/>
                </div>

            </div>
            <div className="movie movieDetails">
                <p className="firstItem"><strong>Título:</strong> {movie.title}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Género:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Año de Publicación:</strong> {movie.release_date}</p>
                <p><strong>Sipnosis:</strong> {movie.overview}</p>
                <p><strong>Críticas:</strong> {movie.vote_average}</p>
                <p><strong>Duración:</strong> {movie.runtime} minutos</p>
            </div>
            {showTrailer && trailerKey && <TrailerPlayer trailerKey={trailerKey} onClose={() => setShowTrailer(false)} />}
            {error && <p>{error}</p>}
        </div>
    );
}
