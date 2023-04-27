import React from 'react'
import './Footer.css'

function Footer()   {
    return (
    <footer>
        <div className='Footer-Content'>
        <ul>
            <li>Servicio al Cliente</li>
            <li>Centro de Ayuda</li>
            <li>Metodos de Pago</li>
            <li>Shopee Garantia</li>
            <li>Devolucion y Reembolso</li>
        </ul>
        <ul>
            <li>Acerca Nuestro</li>
            <li>Politicas de Shoppee</li>
            <li>Politica de Privacidad</li>
            <li>Descuentos</li>
        </ul>
        <p className='Footer-p'>Shoppee All Rights Reserved 2023</p>
        <img className='Footer-img' src="./src/assets/bag.svg" alt="Logo" />
        
        </div>

    </footer>
    )

}

export default Footer