import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {setWish} from "../reducers/wishlist/action"

function ProductDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
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
         {state.products !== undefined ? 
                (state.products.map((e)=>{
                    if(e.id === parseInt(id)){
                        return(
                            <div className="parent">
                            <div className="details">
                                <div><FaHeart className="wish" onClick={() => {addwish(e)}}/></div>
                                <img className="img" alt="" src={e.image}/>
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                                <div className="PriceAndBtn">
                                <p id="price">{e.price} SAR</p>
                                <button id="cart"onClick={() => {navigate(`/cart`)}}>Add to cart</button>
                                </div>
                            </div>
                            </div>)
                    }
                    return(console.log(id))
                })) :("wait .. ") }             
        </>

    );
  }
  
  export default ProductDetails;
  