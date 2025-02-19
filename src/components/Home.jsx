import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
//import { pizzas } from "../data/pizzas.js";
import Footer from "./Footer";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/");
    const data = await res.json();
    console.log(data);

    return setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />

      <main className="container-fluid p-3 ">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-3">
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
{
  /*<CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella, tomates, jamón, orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella, gorgonzola, parmesano, provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella, pepperoni, orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3" 
        />*/
}
