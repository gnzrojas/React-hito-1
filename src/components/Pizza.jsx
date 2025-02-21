import React, { useState, useEffect } from "react";


const Pizza = ({ pizza }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzaById = async () => {
    response = await fetch("http://localhost:5000/api/pizzas/p001");
    data = await response.json();
    console.log(data);

    return setPizzas(data);
  };

  useEffect(() => {
    getPizzaById();
  }, []);
  return (
    <div>
      <main className="container-fluid p-3 ">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-3">
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pizza;
