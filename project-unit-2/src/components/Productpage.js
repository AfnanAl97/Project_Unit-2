import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Search from "./Search";
import Filter from "./Filter";
import { FaHeart } from "react-icons/fa";

function Productpage() {
    const navigate = useNavigate();

    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
            searchresult: state.productsReducer.searchresult,
            filteredProducts : state.productsReducer.filteredProducts,
        };
      });

    return (
        <>
            <Filter/>
            <div className="container">
                <Search/>
                <div className="cards">
                    {console.log(state.filteredProducts)}
                {state.filteredProducts !== undefined ? (state.filteredProducts.map((e)=>{return(
                    <div className="card">
                        <div><FaHeart className="wish" onClick={() => {navigate(`/Wishlist`)}}/></div>
                        <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn">
                        <p id="price">{e.price} SAR</p>
                        <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                        </div>
                    </div>) })) : state.searchresult !== undefined ?(state.searchresult.map((e)=>{return(
                    <div className="card">
                        <div ><FaHeart className="wish" onClick={() => {navigate(`/Wishlist`)}}/></div>
                        <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn">
                        <p id="price">{e.price} SAR</p>
                        <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                        </div>
                    </div>) })) :(state.products.map((e)=>{return(
                    <div className="card">
                        <div><FaHeart className="wish" onClick={() => {navigate(`/Wishlist`)}}/></div>
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
  