import React from 'react'
import './Menu.css' 



export function Menu() {
  return (
    <div>
      <button id='abrir' className='abrir-menu'>Abrir</button>
      <nav className='Menu-nav' id='nav'>
        <button id='cerrar' className='cerrar-menu'>Cerrar</button>
        <ul className='Menu-content'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}



export default Menu