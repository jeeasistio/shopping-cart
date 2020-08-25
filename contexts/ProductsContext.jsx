import React, { useState, createContext } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState('shirt');
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [field, setField] = useState('relevance');
  const [direction, setDirection] = useState('desc');
  
  const searchProducts = async () => {
    setFetching(true);
    const res = await fetch(
      `https://api.searchspring.net/api/search/search?siteId=scmq7n&q=${searchQuery}&resultsFormat=native&page=${currPage}&sort.${field}=${direction}`
    );
    const data = await res.json();
    setFetching(false);
    console.log(data.pagination);
    setProducts(data.results);
  }

  return (
    <ProductsContext.Provider value={{
      products,
      searchProducts,
      searchQuery,
      setSearchQuery,
      fetching,
      field,
      setField,
      direction,
      setDirection,
      currPage,
      setCurrPage
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }