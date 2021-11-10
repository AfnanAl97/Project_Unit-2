import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart, increment, decrement } from "../reducers/cart/action";
import { useEffect, useState } from "react";

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [total, setTotal] = useState();
    const [secretWord, setSecretWord] = useState();

    const state = useSelector((state) => {
        console.log(state)
        return {
          cartList: state.cartListReducer.cartList,
        };
    });

    const userstate = useSelector((state) => {
        return {
          currentUser: state.usersReducer.currentUser,
        };
    });
      //   let id = userstate.currentUser;
      //   state.cartList[id].count;

    useEffect(() => {
      let sub=0

        state.cartList[userstate.currentUser.id].map((element)=>{
            sub =sub+element.price
        })
        setTotal(sub)


    },[]) 

    const addCoupons = (e) => {

     
      if(secretWord === "Hello"){
        let discount=total-(total*0.15)
        setTotal(discount)}
    }

    const deliverDiscount = () => {
        let disc=total+30
        setTotal(disc)
    }

    const confermOrder = () => {
        alert("Successful")
        // navigate("/previosOrder");
    }

    return (
        <>
    <div className="cartpage">
      <div className="carts">
        {state.cartList[userstate.currentUser.id].length !== 0
          ? state.cartList[userstate.currentUser.id].map((element) => {
              return (
                <div  className="cartcard">
                  <h3 onClick={() => { navigate(`/product/${element.id}`);}}>{element.name} </h3>
                     <h3 className="price-left">{element.price}</h3>                  
                  <button id="deleteCart" onClick={() => {
                      let deleteitem = [
                        {
                          id: userstate.currentUser.id,
                          itemId: element.id,
                        },
                      ];
                      const action = deleteCart(deleteitem[0]);
                      dispatch(action);
                    }}
                  > delete </button>
                </div>
              );
            })
          : "Your cart is empty ;)"}

        {console.log(state.cartList[userstate.currentUser.id])}
        <div className="cartcard-2">
            <input id="cou" name="coupon" type="text" placeholder="Your Coupons" onChange={(e)=>{setSecretWord(e.target.value)}}/>
            <button type="button" onClick={addCoupons}>Submit</button>
            <div className="radios">
            <label for="delivery">Delivery</label>
            <input type="radio" id="delivery" name="options" value="delivery"/>
            <h6>Increase 30 SAR</h6>
            </div>
            <div className="radios">
            <label for="collection">Collection</label>
            <input type="radio" id="collection" name="options" value="collection"/>
            </div>
        </div>
        
        <div className="cartcard">
            <h3>Total:</h3>
            <h3>{total}</h3>
        </div>
        <div className="cartcard">
        <button type="button" id="cartbtn" onClick={deliverDiscount}>Check the total before confirm</button>
        <button type="button" id="cartbtn" onClick={confermOrder}>Confirm order</button>
        </div>
  </div>
    </div>
        </>
    );
  }
  
  export default Cart;
  