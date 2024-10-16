import React, { useContext, useState, useEffect } from 'react';
//compontente del sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//importacion del cart context
import { CartContext } from '../contexts/CartContext';
//importar los iconos 
import { BsBag } from 'react-icons/bs';
//importar link del router dom
import { Link } from 'react-router-dom';
//importar el logo
import Logo from '../img/logo.svg';


const Header = () => {
  // estado del header
  const [isActive, setIsActive] = useState(true);
  
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  //El event Listener
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })


  return (
  <header className={`${isActive ? 'bg-white py-4 shadow-md' :
    'bg-none py-6'} fixed w-full z-10 transtion-all`}>
      <div className='container mx-auto flex items-center
      justify-between h-full'>
        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px] ml-3 mt-1' src={Logo} alt="" />
          </div>
        </Link>
        {/* Carta */}
        <div onClick={()=>setIsOpen(!isOpen)}
          className='cursor-pointer flex relative mr-4'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -botom-2 text-[12px] w-[18px] h-[18px]
          text-white rounded-full flex justify-center
          items-center'>{itemAmount}</div>
        </div>
      </div>
  </header>
  
);
}

export default Header;
