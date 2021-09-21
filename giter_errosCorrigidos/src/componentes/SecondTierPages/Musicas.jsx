import '../MainStyle.css'
import React from 'react'
import yahoo_musicas from '../images/yahoo_diversas2.jpg'
import yahoo_musicas2 from '../images/yahoo_musicas2.jpg'
import yahoo_musicas3 from '../images/yahoo_musicas3.jpg'
import yahoo_musicas4 from '../images/yahoo_musicas4.jpg'

import { Link } from "react-router-dom";

export default function Musicas() {
    return (
        <div>
            <div className="imagem-container">
                <img src={yahoo_musicas} alt="intro Musicas" className="musicasimg"></img>
            </div>
            <div className="imagem-container">
                <img src={yahoo_musicas2} alt="intro Musicas 2" className="musicasimg2"></img>
            </div>
         

            <div className="inicio">
                <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}