import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {Home} from '../pages/Home';
import NotFound from '../pages/NotFound';
import {MovieDetails} from '../pages/MovieDetails';
import { MovieList } from '../components/MovieList';
import Buy from "../pages/Buy";
import Rent from "../pages/Rent";

export const GlobalRouter = () => {
    return (
        <Router>
            <Header/>
            <div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/Buy" element={< Buy/>} />
                    <Route path="/Rent" element={< Rent/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </div>

        </Router>
    );
};


