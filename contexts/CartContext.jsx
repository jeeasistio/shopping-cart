import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  
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
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart
    }}>
      { children }
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider };