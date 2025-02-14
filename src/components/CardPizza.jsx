
const CardPizza = ({ pizza }) => {
    const { name, img, price, ingredients, desc } = pizza
  return (
    <div className="card container">
      <img className = "border rounded" src= {img} alt={name} />
        <h2 className='text-start fs-3 fw-bold m-2 text-capitalize'>{name}</h2>
        <hr />

        <h6>🍕Ingredientes:</h6>
        
        <ul className="list-unstyled text-capitalize">
          {ingredients.map((ingredient, index) => (
            <li key = {index}>{ingredient}</li>
          ))}
        </ul>
        
        {/* <hr /> */}

        {/*<p className="card-text">{desc}</p>*/}
        <hr />

        <p className='fs-4 fw-bold'>Precio: ${price.toLocaleString()}</p>
        <div className='botones-card'>
            <button className='bg-light border rounded border-danger'>Ver más 👀</button>
            <button className='bg-dark text-white border rounded'>Añadir 🛒</button>
        </div> 
    </div>
  );
};

export default CardPizza;
