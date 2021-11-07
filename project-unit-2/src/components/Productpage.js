import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Search from "./Search";
import { setProducts } from "../reducers/product/action";
import Filter from "./Filter";

function Productpage() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
            searchresult: state.productsReducer.searchresult,
        };
      });

    return (
        <>
            <Filter/>
            <div className="container">
                <Search/>
                <div className="cards">
                {state.searchresult !== undefined ? 
                (state.searchresult.map((e)=>{return(
                <div className="card">
                    <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                    <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                    <p>{e.description}</p>
                    <div className="PriceAndBtn">
                    <p id="price">{e.price} SAR</p>
                    <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                    </div>
                </div>) })) :(state.products.map((e)=>{return(
                <div className="card">
                    <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                    <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                    <p>{e.description}</p>
                    <div className="PriceAndBtn">
                    <p id="price">{e.price} SAR</p>
                    <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                    </div>
                </div>) })) } 
                
                </div>
                <Footer/>
            </div>

        </>
    );
  }
  
  export default Productpage;
  