import React from 'react'
import './Menu.css' 

export function Menu() {
  return (
    <div>
       <ul className='Menu-content'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Contacto</a></li>
       </ul>
    </div>
  )
}

export default Menu