import React from 'react'
import './Middle.css'

export function Middle() {
  return (
    <div>
        
        <img className='Middle-banner' src="../src/assets/Banner.png" alt="Banner" />
        
        <p className='Middle-tittle' >¡Encuentra mas de 1.000 Productos en Shoppee!</p>
        <div className='Middle-content'>
            <input className='Middle-search' type="text" placeholder='Buscar en Shoppee'/>
        </div>
    </div>
    
  )
}

export default Middle