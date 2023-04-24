import React from 'react'
import './Cards.css'

export function Cards() {
  return (
<section className='Card-content'>
    <div className='cardconteiner' >
        <img className='Card-image' src="./src/assets/products/clothes.jpg" alt="product"/>
        <p  className='Card-description'>Indumentaria</p>
        <button className='Card-button'>Comprar</button>
    </div>
        
    <div className='cardconteiner' >
        <img  className='Card-image' src="./src/assets/Products/bike.jpg" alt="product"/>
        <p className='Card-description'>Bicicletas</p>
        <button className='Card-button'>Comprar</button>
    </div>
    
    <div className='cardconteiner' >
        <img  className='Card-image'src="./src/assets/Products/table.jpg" alt="product"/>
        <p className='Card-description'>Escritorios y Mesas</p>
        <button className='Card-button'>Comprar</button>
    </div>
    
    <div className='cardconteiner' >
    <img className='Card-image' src="./src/assets/Products/bolso.jpg" alt="product"/>
    <p className='Card-description'>Bolsos y Mochilas</p>
    <button className='Card-button'>Comprar</button> 
    </div>

</section>
)
}

export default Cards