import React, {createContext, useState, useEffect} from 'react';


export const ProductContext = createContext();

const ProducProvider = ({children}) => {
  //Producto State
  const [products, setProducts] = useState([]);
  //Fetch de productos
  useEffect(()=>{
      const fetchProducts = async ()=>{
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
      };
      fetchProducts();
  }, [])


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProducProvider;
 