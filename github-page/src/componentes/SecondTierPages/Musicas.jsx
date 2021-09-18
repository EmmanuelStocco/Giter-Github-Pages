import '../MainStyle.css'
import React from 'react'
import yahoo_musicas from '../images/yahoo_diversas2.jpg'
import { Link } from "react-router-dom";

export default function Musicas() {
    return (
        <div>
            <div className="imagem-container">
            <img src={yahoo_musicas} alt="intro Musicas" className="musicasimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}