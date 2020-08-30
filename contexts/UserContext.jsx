import React, { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [balance, setBalance] = useState(500);
  const [history, setHistory] = useState([]);

  const purchaseItem = (item, quantity = 1) => {
    const { name, price, on_sale, sale_price } = item;
    setBalance(prevBalance => prevBalance - (on_sale === 'Yes' ? sale_price : price));
    setHistory(prevHistory => [
      ...prevHistory,
      {
        name,
        unitPrice: (on_sale === 'Yes' ? +sale_price : +price) * quantity,
        quantity
      }
    ])
  }

  const removeHistory = (index) => {
    setHistory([...history.slice(0, index), ...history.slice(index + 1, history.length)])
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