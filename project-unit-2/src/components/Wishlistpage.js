import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {deletewish} from "../reducers/wishlist/action"



function Wishlistpage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            wishlist: state.wishlistReducer.wishlist,   
        };
      });

    return (
        <div className="wishpage">
            <div className="wishes">
                {state.wishlist.length !== 0 ? (state.wishlist.map((element) => {
                    return(<div className="wishcard"> 
                                <img src={element.image} alt="" onClick={() => {navigate(`/product/${element.id}`)}}/>
                                <h3 onClick={() => {navigate(`/product/${element.id}`)}}>{element.name}</h3>
                                <button id="delete" onClick={() => {const action = deletewish(element.id);
                                    dispatch(action);}}>delete</button>
                            </div>);}) ) :("There is no wish here ;)")}
            </div>
        </div>

    );
  }
  
  export default Wishlistpage;
  