import React from 'react'

const CardPizza = ({name, price, ingredients, img}) => {

  return (
    <div className='card container'>
        <img className = "border rounded" src= {img} alt={name} />
        <h2 className='text-start fs-3 fw-bold m-2'>{name}</h2>
        <hr />
        <p>Ingredientes: 🍕{ingredients}</p>
        <hr />
        <p className='fs-4 fw-bold'>Precio: {price}</p>
        <div className='botones-card'>
            <button className='bg-light border rounded border-danger'>Ver más 👀</button>
            <button className='bg-dark text-white border rounded'>Añadir 🛒</button>
        </div>
    </div>
  )
}

export default CardPizza