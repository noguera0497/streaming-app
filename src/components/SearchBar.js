import React from 'react';
import '../styles/SearchBar.css';

export function SearchBar() {
    return (
        <form className="searchContainer">
            <div className="searchBox">
                <input
                    className="searchInput"
                    type="text"
                    autoFocus
                    placeholder="Buscar películas"
                    aria-label="Buscar películas"
                />
                <button className="searchButton">
                    Buscar
                </button>
            </div>
        </form>
    );
}
