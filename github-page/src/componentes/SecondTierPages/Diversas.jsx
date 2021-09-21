import '../MainStyle.css'
import React from 'react'
import yahoo_diversas1 from '../images/yahoo_diversas1.jpg'
import yahoo_diversas2 from '../images/yahoo_diversas2.jpg'
import yahoo_diversas3 from '../images/yahoo_diversas3.jpg'
import yahoo_diversas4 from '../images/yahoo_diversas4.jpg'
import { Link } from "react-router-dom";

export default function Diversas1() {
    return (
        <div>
            <div className="imagem-container">
            <img src={yahoo_diversas1} alt="Logo da Diversas" className="diversas_yahoo"></img>
            </div> 
            <div className="imagem-container">
                <img src={yahoo_diversas3} alt="Logo da Diversas" className="diversas_yahoo"></img>
            </div>
            <div className="imagem-container">
                <img src={yahoo_diversas4} alt="Logo da Diversas" className="diversas_yahoo"></img>
            </div>

            <div className="inicio">
            <Link to = "/mais"> Voltar </Link>
            </div>
        </div>
    )

}