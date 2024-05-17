import { useEffect, useState } from 'react';
import { get } from "../util/httpClient";

export const useTrailer = (movieId) => {
    const [trailerKey, setTrailerKey] = useState("");

    useEffect(() => {
        if (movieId) {
            get(`/movie/${movieId}/videos`).then((videosData) => {
                const trailer = videosData.results.find((video) => video.type === "Trailer");
                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            });
        }
    }, [movieId]);

    return { trailerKey};
};