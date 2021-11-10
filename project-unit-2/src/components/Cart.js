import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart, increment, decrement } from "../reducers/cart/action";
import { useEffect, useState } from "react";

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [total, setTotal] = useState();

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

    const addCoupons = () => {
        let discount=total-(total*0.15)
        setTotal(discount)
    }

    const deliverDiscount = () => {
        let disc=total+30
        setTotal(disc)
    }

    return (
        <>
    <div className="cartpage">
      <div className="carts">
        {state.cartList[userstate.currentUser.id].length !== 0
          ? state.cartList[userstate.currentUser.id].map((element) => {
              return (
                <div  className="cartcard">
                  <h3
                    onClick={() => {
                      navigate(`/product/${element.id}`);
                    }}
                  >
                    {element.name}  <div className="price-left">{element.price}</div>
                  </h3>
                  <h3
                    onClick={() => {
                      navigate(`/product/${element.id}`);
                    }}
                  >
                  </h3>
                  <button
                    id="deleteCart"
                    onClick={() => {
                      let deleteitem = [
                        {
                          id: userstate.currentUser.id,
                          itemId: element.id,
                        },
                      ];
                      const action = deleteCart(deleteitem[0]);
                      dispatch(action);
                    }}
                  >
                    delete
                  </button>

                </div>
              );
            })
          : "Your cart is empty ;)"}
        {console.log(state.cartList[userstate.currentUser.id])}
      </div>
      <h3>Total: {total}</h3>
      <form>
      <label for="coupon">Coupons</label> 
      <input id="coup" name="coupon" type="text"/>
      <button type="button" onClick={addCoupons}>Submit</button>
    </form>

  <input type="radio" id="html" name="options" value="delivery"/>
  <label for="html"><h3>Delivery</h3></label><br/>
  <h6>Increase 30 SAR</h6>
  
  <input type="radio" id="css" name="options" value="collection"/>
  <label for="css"><h3>Collection</h3></label><br/>
    </div>

  <button type="button" onClick={deliverDiscount}>Confirm order</button>
        </>
    );
  }
  
  export default Cart;
  