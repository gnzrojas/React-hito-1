import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Función para agregar productos al carrito
  const addToCart = ({ id, name, img, price }) => {
    //Asegura que el precio sea numérico
    const numericPrice = Number(price);

    //Verifica si el precio es válido
    if (isNaN(numericPrice)) {
      console.error(`Precio inválido para ${name}: ${price}`);
      return;
    }

    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((p) => p.id === id);
      
      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          count: updatedCart[productIndex].count+1
        };
        return updatedCart;
      } else {
        return [...prevCart, { id, name, img, price: numericPrice, count: 1 }];
      }
    });
  };

  //Funcion para incrementar cantidad de pizza en el carrito
  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  //Función para disminuir cantidad de pizza en el carrito
  const decrement = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) //Se elimina el producto si llega a 0
    );
  };

  //Calcular el total cada vez que el carrito cambia
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => {
      const itemPrice = Number(item.price);
      const itemCount = Number(item.count);

      if (isNaN(itemPrice) || isNaN(itemCount)) {
        console.error(
          `Valores inválidos para ${item.name}: precio = ${item.price}, cantidad = ${item.count}`
        );
        return sum;
      }

      return sum + (itemPrice * itemCount);
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    console.log("Estado actual del carrito: ", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
