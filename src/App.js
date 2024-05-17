import React from 'react';
import './styles/styles.css';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {MovieList} from "./components/MovieList";
import {GlobalRouter} from "./router/GlobalRouter";
import {Router} from "react-router";


export function App() {
    return (

        <div>
            <main >
                <GlobalRouter/>
            </main>

        </div>

    );
}