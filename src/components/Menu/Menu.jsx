import React from 'react'
import './Menu.css' 
import './Menu.js'



export function Menu() {
  return (
    <div className='Menu-content_main'>
      
      <button id='abrir' className='abrir-menu' >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="abrir-ico" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>

      <nav className='Menu-nav' id='nav'>
        
        <button id='cerrar' className='cerrar-menu'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg></button>

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