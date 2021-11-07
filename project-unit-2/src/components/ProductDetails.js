import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

function ProductDetails() {
    const navigate = useNavigate();

    const { id } = useParams();
    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
        };
      });
    
    return (
        <>
         {state.products !== undefined ? 
                (state.products.map((e)=>{
                    if(e.id === parseInt(id)){
                        return(
                            <div className="parent">
                            <div className="details">
                                <div><FaHeart className="wish" onClick={() => {navigate(`/Wishlist`)}}/></div>
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
  