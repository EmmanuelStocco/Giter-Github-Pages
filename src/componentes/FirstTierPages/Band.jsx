import '../MainStyle.css'
import React from 'react'
import band from '../images/band.png'
import { Link } from "react-router-dom";

export default function Band() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={band} alt="Logo da TV Band" className="bandimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}