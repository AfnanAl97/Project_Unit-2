import Header from './components/Header';
import Productpage from './components/Productpage';
import ProductDetails from './components/ProductDetails';
// import Adminpage from './components/Adminpage';
// import Wishlistpage from './components/Wishlistpage';
import Cart from './components/Cart';
import React from 'react';

<<<<<<< HEAD
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Form />
    {/* <Productpage/> */}
    </BrowserRouter>
=======
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
>>>>>>> e0c4201fb2e31a896e123fd36cc501250fcee6e7
  );
}
export default App