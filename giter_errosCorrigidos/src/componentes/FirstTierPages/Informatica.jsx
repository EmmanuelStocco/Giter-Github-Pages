import '../MainStyle.css'
import React from 'react'
import informatica from '../images/yahoo_informatica.png'
import informatica2 from '../images/yahoo_informatica2.jpg'
import informatica5 from '../images/yahoo_informatica5.jpg'
import { Link } from "react-router-dom";

export default function Informatica() {
    return (
        <div className="body">
            <div className="imagem-container">
                <img src={informatica} alt="Logo informatica" className="informatica"></img>
            </div>
            <div className="imagem-container">
                <img src={informatica2} alt="Logo informatica" className="informatica"></img>
            </div>
            <div className="imagem-container">
                <img src={informatica5} alt="Logo informatica" className="informatica"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}