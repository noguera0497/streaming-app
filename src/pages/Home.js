import React from 'react';
import { MovieList } from '../components/MovieList';
import {Header} from "../components/Header";
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import {SearchBar} from "../components/SearchBar";

export const Home = () => {
    return (
        <div>

            <SearchBar/>
            <NavBar/>
            <MovieList />
            <Footer/>
        </div>
    );
};

