import '../MainStyle.css'
import React from 'react'
import Cozinha from '../images/yahoo_cozinha.jpg'
import { Link } from "react-router-dom";

export default function Cozinhar() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={Cozinha} alt="vida_pessoal" className="vidapessoal"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}