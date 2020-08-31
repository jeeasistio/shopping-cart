import React, { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [balance, setBalance] = useState(500);
  const [history, setHistory] = useState([]);

  const purchaseItem = (item, quantity = 1) => {
    const { name, price, on_sale, sale_price } = item;
    const unitPrice = on_sale === 'Yes' ? +sale_price : +price;
    const totalPrice = unitPrice * quantity;
    setBalance(prevBalance => prevBalance - totalPrice);
    setHistory(prevHistory => [
      ...prevHistory,
      {
        name,
        quantity,
        unitPrice,
        totalPrice,
        date: new Date(Date.now()).toDateString()
      }
    ])
  }

  const removeHistory = (index) => {
    setHistory([
      ...history.slice(0, index), ...history.slice(index + 1, history.length)
    ])
  }

  return (
    <UserContext.Provider value={{
      balance,
      history,
      removeHistory,
      purchaseItem
    }}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };