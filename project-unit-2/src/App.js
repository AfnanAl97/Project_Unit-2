import Header from './components/Header';
import Productpage from './components/Productpage';
import ProductDetails from './components/ProductDetails';
// import Adminpage from './components/Adminpage';
// import Wishlistpage from './components/Wishlistpage';
import Cart from './components/Cart';
import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Productpage/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
export default App