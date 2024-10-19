import React, {createContext, useState, useEffect} from 'react';
import productsData from '../JsonProducts.json';


export const ProductContext = createContext();

const ProducProvider = ({children}) => {
  //Producto State
  const [products, setProducts] = useState([]);
  //Fetch de productos

  /* API de fake store API
  useEffect(()=>{
      const fetchProducts = async ()=>{
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
      };
      fetchProducts();
  }, []) */

  useEffect(() => {
    const loadProducts = () => {
      setProducts(productsData); // Asigna directamente los datos del JSON local
    };
    loadProducts();
  }, []);


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProducProvider;
 