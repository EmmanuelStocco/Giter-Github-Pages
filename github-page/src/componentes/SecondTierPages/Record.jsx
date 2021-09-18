import '../MainStyle.css'
import React from 'react'
import record from '../images/mitos.jpg'
import { Link } from "react-router-dom";

export default function Record() {
    return (
        <div className="body">
            <div className="imagem-container">
            <img src={record} alt="Logo da Record" className="recordimg"></img>
            </div>
            <div className="inicio">
            <Link to = "/"> Voltar </Link>
            </div>
        </div>
    )

}