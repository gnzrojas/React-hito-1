import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  const aumentarTotal = (id) => {
    const carroMas = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setCart(carroMas);
  };

  const disminuirTotal = (id) => {
    const carroMenos = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      })
      .filter((item) => item.count > 0);
    setCart(carroMenos);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>

      {cart.map((item) => (
        <div className="card mb-3 mx-auto w-50" key={item.id}>
          <div className="row g-0 align-items-center">
            <div className="col-3 d-flex justify-content-center">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-5">
              <div className="card-body p-2">
                <h6 className="card-title text-capitalize">{item.name}</h6>
                <p className="card-text m-0">
                  Precio: ${item.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="btn-group d-flex align-items-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => disminuirTotal(item.id)}
                >
                  -
                </button>
                <span className="btn btn-light p-3">{item.count}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => aumentarTotal(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end mt-4">
        <h3>Total de la compra: ${calcularTotal().toLocaleString()}</h3>
        <button className="btn btn-success m-2 btn-lg">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
