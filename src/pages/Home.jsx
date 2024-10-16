import React, {useContext} from 'react';
//Importar productos del context
import {ProductContext} from '../contexts/ProductContext.jsx';
import Product from '../components/Product';
import Hero from '../components/Hero.jsx';




const Home = () => {
  //obtener los productos del product context
  const {products} = useContext(ProductContext);
  //obtener solamente categoria de ropa de hombre y mujer
  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category == "women's clothing");
  })

  return <div>
    <Hero />
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredProducts.map((products) =>{
          return <Product product={products} key={products.id}/>;
          
        })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
