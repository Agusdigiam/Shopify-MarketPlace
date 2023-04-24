import React from 'react'
import './Cards.css'

export function Cards() {
  return (
<div className='Card-content'>
        
        <img className='Card-image' src="./src/assets/products/clothes.jpg" alt="product"/>
        <p  className='Card-description'>Indumentaria</p>
        <button className='Card-button'>Comprar</button>
    
    
        <img  className='Card-image' src="./src/assets/Products/bike.jpg" alt="product"/>
        <p className='Card-description'>Bicicletas</p>
        <button className='Card-button'>Comprar</button>
    
    
        <img  className='Card-image'src="./src/assets/Products/table.jpg" alt="product"/>
        <p className='Card-description'>Escritorio</p>
        <button className='Card-button'>Comprar</button>
    
    
        <img className='Card-image' src="./src/assets/Products/bolso.jpg" alt="product"/>
        <p className='Card-description'>Bolso</p>
        <button className='Card-button'>Comprar</button>
</div>
)
}

export default Cards