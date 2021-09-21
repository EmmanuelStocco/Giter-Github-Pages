import '../MainStyle.css'
import React from 'react'
import futebol from '../images/yahoo_diversas3.jpg'
import { Link } from "react-router-dom";

export default function Futebol() {
    return (
        <div>
            <div className="imagem-container">
            <img src={futebol} alt="Pergunta futebol" className="futebolimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/record"> Voltar </Link>
            </div>
        </div>
    )

}