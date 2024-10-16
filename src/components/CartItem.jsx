import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//importar el CartContext
import { CartContext } from '../contexts/CartContext.jsx';

//importar los iconos react
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  
  //Lo que contendra el item
  const {id, title, image, price, amount} = item;


  return (
  <div className='flex gap-x-4 py-2 lg:px-6 border-b
  border-gray-200 w-full font-light text-gray-800'>
    <div className='w-full min-h-[150px] flex items-center
    gap-x-4'>
      {/* Imagen */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
      </Link>
      <div className='w-full flex flex-col'>
        {/* titulo y quitar icono  */}
        <div className='flex justify-between mb-2'>
          {/* titulo*/}
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium
          max-w-[240px] text-primary hover:underline'>
            {title}
          </Link>
          {/* quitar icono */}
          <div onClick={()=> removeFromCart(id) } className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500
            transition' />
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px]
        text-sm'>
          {/* cantidad */}
          <div className='flex flex-1 max-2-[100px]
           items-center h-full border
          text-primary font-medium'>
            {/* icono de resta - */}
            <div onClick={()=> decreaseAmount(id)} className='flex-1 flex
            justify-center items-center cursor-pointer h-full'>
              <IoMdRemove />
            </div>
            {/* contador */}
            <div className='h-full flex justify-center
            items-center px-2'>{amount}</div>
            {/* icono de suma */}
            <div onClick={()=> increaseAmount(id)} className='flex-1 h-full flex
            justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>

          </div>
          {/* precio del item */}
          <div className='flex-1 flex items-center
          justify-around'>$ {price}</div>
          {/* precio final */}
          {/* hacer el precio como 2 decimales */}
          <div className='flex-1 flex justify-end
          items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>
)};

export default CartItem;
