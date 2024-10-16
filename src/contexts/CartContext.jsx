import React, {createContext, useState, useEffect} from 'react';

//crear el contexto de la Cart
export const CartContext = createContext();

const CartProvider = ({children}) => {
  //Crear el useState de la cart
  const [cart, setCart ] = useState([]);
  //Stado del contador de los items
  const [itemAmount, setItemAmount] = useState(0);
  //estado del precio total
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem) => 
    {
      return accumulator + currentItem.price * currentItem.amount
    },0);
    setTotal(total);
  })



  //Actualizar el contador de items
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=> {
        return accumulator + currentItem.amount;

      }, 0);
      setItemAmount(amount);
    }
  },[cart]);


  //funcion añadir al carrito
  const addToCart = (product, id)=> {
    const newItem = {...product, amount: 1};
    // chequear si el item esta en el cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
   // if cart item si esta en el carrito
    if (cartItem){
      const newCart = [...cart].map((item)=>{
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  };

  //funcion de quitar la carta de items
  const  removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  //limpiar carta
  const clearCart = () => {
    setCart([]);
  };

  //incrementar contador
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem,id);
  };

  //restar contador
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem){
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount -1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    
      if (cartItem.amount < 2){
        removeFromCart(id);
      }
    
  };
  

  return <CartContext.Provider value={{cart,addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount,itemAmount,total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
