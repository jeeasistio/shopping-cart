import React, { useState, createContext} from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState('shirt');
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(false);

  const searchProducts = async () => {
    setFetching(true);
    const res = await fetch(`https://api.searchspring.net/api/search/search?siteId=scmq7n&q=${searchQuery}&resultsFormat=native`);
    const data = await res.json();
    setFetching(false);
    setProducts(data.results);
  }

  return (
    <ProductsContext.Provider value={{
      products,
      searchProducts,
      searchQuery,
      setSearchQuery,
      fetching
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }