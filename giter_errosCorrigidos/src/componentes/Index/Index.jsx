import '../MainStyle.css'
import React from 'react'
import interrogacao from '../images/interrogacao.jpg'

export default function Index() {
    return (
        <div className="body">
            <div className="indeximage">
                <img src={interrogacao} alt="Tela de Interrogação"></img> 
            </div>
            
        </div>
    )

}