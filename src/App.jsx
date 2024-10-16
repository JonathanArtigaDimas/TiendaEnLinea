
//Acá se importan las pages
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
//Acá se importan los componentes
import Sidebar from './components/Sidebar.jsx';
import Product from './components/Product.jsx';
import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartItem from './components/CartItem.jsx';
import { Route, Routes } from 'react-router';



const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    <Sidebar />
    <Footer />
  </div>;
};

export default App;
