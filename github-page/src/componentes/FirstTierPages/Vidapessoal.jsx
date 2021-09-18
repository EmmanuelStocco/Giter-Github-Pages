import '../MainStyle.css'
import React from 'react'
import vidaPessoal from '../images/yahoo_vidapessoal.jpg'
import { Link } from "react-router-dom";

export default function Vida () {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={vidaPessoal} alt="vida_pessoal" className="vidapessoal"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}