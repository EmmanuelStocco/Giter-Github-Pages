import React from "react";
import { Link } from "react-router-dom";

import './IndexMenu.css'

export default function IndexMenu() {
    return (
            <header className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/record" className="record"> Record </Link> </li>
                        <li> <Link to = "/trabalho" className="trabalho"> Trabalho </Link> </li>
                        <li> <Link to = "/vida" className="vida"> Vida Pessoal </Link> </li>
                        <li> <Link to = "/cozinha" className="cozinha"> Cozinha </Link> </li>
                    </ul>
                </nav>
            </header>
    )
}