import Header from './components/Header';
import Productpage from './components/Productpage';
import ProductDetails from './components/ProductDetails';
import Adminpage from './components/Adminpage';
import Wishlistpage from './components/Wishlistpage';
import Cart from './components/Cart';
import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import PrevOders from './components/PrevOrders'

function App() {
  return (
    <>
     <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Productpage/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Wishlist" element={<Wishlistpage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Admin" element={<Adminpage/>}/>
          <Route path= "/Prev" element={<PrevOders/>}/>

        </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
