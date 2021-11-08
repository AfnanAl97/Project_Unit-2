import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Search from "./Search";
import Filter from "./Filter";
import { FaHeart } from "react-icons/fa";
import {setWish} from "../reducers/wishlist/action";


function Productpage({ posts }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
            searchresult: state.productsReducer.searchresult,
            filteredProducts : state.productsReducer.filteredProducts,
        };
      });

      const addwish = (e) =>{
        // console.log(e.name);
        const action = setWish(e);
        dispatch(action);
        navigate(`/Wishlist`);
    }

    return (
        <>
            <Filter/>
            <div className="container">
                <Search/>
                <div className="cards">
                {state.filteredProducts !== undefined ? (state.filteredProducts.map((e)=>{return(
                    <div className="card">
                        <div><FaHeart className="wish" onClick={() => {addwish(e)}}/></div>
                        <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn">
                        <p id="price">{e.price} SAR</p>
                        <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                        </div>
                    </div>) })) : state.searchresult !== undefined ?(state.searchresult.map((e)=>{return(
                    <div className="card">
                        <div ><FaHeart className="wish" onClick={() => {addwish(e)}}/></div>
                        <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn">
                        <p id="price">{e.price} SAR</p>
                        <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                        </div>
                    </div>) })) :(posts.map((e)=>{return(
                    <div className="card">
                        <div><FaHeart className="wish" onClick={() => {addwish(e)}}/></div>
                        <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn">
                        <p id="price">{e.price} SAR</p>
                        <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                        </div>
                    </div>) })) } 
                
                </div>
                
            </div>

        </>
    );
  }
  
  export default Productpage;
  