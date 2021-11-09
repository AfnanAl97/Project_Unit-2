
import Header from './components/Header';
import Productpage from './components/Productpage';
import ProductDetails from './components/ProductDetails';
import Adminpage from './components/Adminpage';
import Wishlistpage from './components/Wishlistpage';
import Cart from './components/Cart';
import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Pagination from "./components/Pagination";
import { useSelector } from "react-redux";
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {

  const [products, setproducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);


  const state = useSelector((state) => {
    return {
        products: state.productsReducer.products,

    };
  });


  useEffect(()=>{
    setproducts(state.products)
  },[])
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentproducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
console.log(currentproducts)
  return (
    <>
     <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Productpage products={currentproducts} />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Wishlist" element={<Wishlistpage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Admin" element={<Adminpage/>}/>

        </Routes>

      <Pagination
        productsPerPage={productsPerPage}
        totalproducts={products.length}
        paginate={paginate}
      />
       
    </BrowserRouter>
    </>
  );
}
export default App;
