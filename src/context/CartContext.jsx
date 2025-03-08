import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Función para agregar productos al carrito
  const addToCart = ({ id, name, img, price }) => {
    const productFindIndex = cart.findIndex((p) => p.id === id);

    if (productFindIndex >= 0) {
      const updatedCart = cart.map((item, index) =>
        index === productFindIndex ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, name, img, price, count: 1 }]);
    }
  };

  //Funcion para incrementar cantidad de pizza en el carrito
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  //Función para disminuir cantidad de pizza en el carrito
  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, counts: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) //Elimina el carro cuando llega a 0
    );
  };

  //Función para calcular el total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
