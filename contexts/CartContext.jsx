import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [onCartQuantities, setOnCartQuantities] = useState({});

  const addToCart = (item) => {
    setCart([
      ...cart,
      item
    ]);
  }

  const removeFromCart = (item) => {
    setCart(
      cart.filter(CI => CI.id !== item.id)
    )
  }
  
  const clearCart = () => {
    setCart([]);
    setTotalCartPrice(0);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      totalCartPrice,
      setTotalCartPrice,
      clearCart,
      onCartQuantities,
      setOnCartQuantities
    }}>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider };