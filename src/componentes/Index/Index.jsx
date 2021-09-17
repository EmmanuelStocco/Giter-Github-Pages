import '../MainStyle.css'
import React from 'react'
import tvindex from '../images/interrogacao.jpg'

export default function Index() {
    return (
        <div className="body">
            <div className="indeximage">
            <img src={tvindex} alt="Tela de Interrogação"></img>
            </div>
        </div>
    )

}