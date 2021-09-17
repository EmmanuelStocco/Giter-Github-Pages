import '../MainStyle.css'
import React from 'react'
import trabalhoyahoo from '../images/yahoo_trabalho.jpg'
import { Link } from "react-router-dom";

export default function Band() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={trabalhoyahoo} alt="perguntas_trabalho" className="trabalho_yahoo"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}