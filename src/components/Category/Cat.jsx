import React from 'react'
import './Cat.css'



export function Cat() {
  return (
    <>
    <img className='Cat-Ban_img' src="./src/assets/BannerTwo.jpg" alt="Cat-Banner" />
    <h3 className='Cat-tittle'>#Categorias mas Populares!</h3>
    <div className='Cat-select'>
            <select  name="SELECT" id="Category">
            <option value=""></option>
            <option value="">Aire Libre</option>
            <option value="">Indumentaria</option>
            <option value="">Productos de Limpieza</option>
            <option value="">Deportes</option>
            <option value="">Accesorios de Vehiculo</option>
            <option value="">Bicicletas</option>
            <option value="">Tecnologia</option>
            <option value="">Electrodomesticos</option>
        </select>
    </div>
    





    </>

  )
}

export default Cat