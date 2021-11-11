import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart, increment, decrement } from "../reducers/cart/action";
import { useEffect, useState } from "react";
import {  addToPrev } from '../reducers/PreviousOders/action'
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
      //   state.cartList[id].countl;

  useEffect(() => {
    let sub = 0;
    state.cartList[userstate.currentUser.id].map((element) => {
      sub = sub + element.price;
    });
    setTotal(sub);

  }, []);

  const addCoupons = () => {
    if (secretWord === "Hello") {
      let discount = total - total * 0.15;
      setTotal(discount);
    }
  };

  const deliverDiscount = (e) => {
    let value = e.target.value;
    if (value === "delivery") {
      let disc = total + 30;
      setTotal(disc);
    } else if (value === "collection") {
      let disc = total + 10;
      setTotal(disc);
    }
  };

  const confermOrder = (e) => {
    let newArr = [
      {
        id: userstate.currentUser.id,
        item: state.cartList[userstate.currentUser.id] ,
      },
    ];
    const action = addToPrev(newArr[0]);
    dispatch(action);
    console.log(newArr);
    alert("Successful");
    navigate("/prev");
  };

 

  return (
    <>
      <div class="parent">
        <h1 id="heading">Order Summary</h1>
        <div class="summary_card">
          {state.cartList[userstate.currentUser.id].length !== 0
            ? state.cartList[userstate.currentUser.id].map((element) => {
                return (
                  <div className="item-cart">
                    <h4
                      onClick={() => {
                        navigate(`/product/${element.id}`);
                      }}
                    >
                      {element.name}{" "}
                    </h4>
                    <h4 className="price-left">{element.price} SAR</h4>
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
                        setTotal(total-element.price)
                      }}
                    >
                      {" "}
                      delete{" "}
                    </button>
{/* 
                    <button
                      id="increment"
                      onClick={() => {
                          let incItem = [
                              {
                                  id: userstate.currentUser.id,
                                  itemId: element.id,
                              },
                          ];
                        const action = incItem(incItem[0]);
                        dispatch(action)
                      }}
                      >
                          {" "}
                          1{" "}
                      </button>

                      <button
                      id="decrement"
                      onClick={() => {
                          let decItem = [
                              {
                                  id: userstate.currentUser.id,
                                  itemId: element.id,
                              },
                          ];
                        const action = decItem(decItem[0]);
                        dispatch(action)
                      }}
                      >
                          {" "}
                          -1{" "}
                      </button> */}
                  </div>
                );
              })
            : "Your cart is empty ;)"}

          <hr />

          <div className="cart-pross">
            <input
              id="input-coupon"
              name="coupon"
              type="text"
              placeholder="Your Coupons"
              onChange={(e) => {
                setSecretWord(e.target.value);
              }}
            />
            <button type="button" id="btn-coupon" onClick={addCoupons}>
              discount
            </button>
          </div>
          <div className="radios">
            <label for="delivery">
              <input
                type="radio"
                id="delivery"
                name="options"
                value="delivery"
                onChange={deliverDiscount}
              />{" "}
              Delivery
            </label>
            <label for="collection">
              <input
                type="radio"
                id="collection"
                name="options"
                value="collection"
                onChange={deliverDiscount}
              />{" "}
              Collection
            </label>
          </div>

          <div className="total-cart">
            <h3>Total:</h3>
            <h3>{total} SAR</h3>
          </div>
          <div className="buttons-cart">
            <button type="button" id="cartbtn" onClick={()=>confermOrder()}>
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </>
  );
 }


export default Cart;
