import React, { useEffect } from 'react';
import "../styles/TrailerPlayer.css";

const TrailerPlayer = ({ trailerKey, onClose }) => {
    useEffect(() => {
        if (trailerKey) {
            const iframe = document.createElement('iframe');
            iframe.id = 'trailerIframe';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`;
            iframe.title = 'YouTube video player';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.zIndex = '1000';
            iframe.style.backgroundColor = 'black';
            document.body.appendChild(iframe);

            const closeOnEscape = (event) => {
                if (event.key === 'Escape') {
                    iframe.remove();
                    if (onClose) onClose();
                }
            };

            document.addEventListener('keydown', closeOnEscape);

            return () => {
                document.removeEventListener('keydown', closeOnEscape);
                if (document.body.contains(iframe)) {
                    iframe.remove();
                }
            };
        }
    }, [trailerKey, onClose]);

    return null;
};

export default TrailerPlayer;