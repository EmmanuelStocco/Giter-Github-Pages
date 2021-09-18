import React from "react";
import { Link } from "react-router-dom";

import '../Index/IndexMenu.css'

export default function SecondMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>   
                        <li> <Link to = "/record/futebol" className="futebol"> Futebol </Link> </li>
                        <li> <Link to = "/record/diversas" className="diversas"> Diversas </Link> </li>
                        <li> <Link to = "/record/musicas" className="musicas"> Musicas </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}