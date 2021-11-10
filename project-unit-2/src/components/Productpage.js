import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Search from "./Search";
import Filter from "./Filter";
import { FaHeart } from "react-icons/fa";
import { setWish } from "../reducers/wishlist/action";
import { setCart } from "../reducers/cart/action";
import { getProducts } from "../reducers/product/action"
import { useEffect, useState } from "react";


function Productpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      products: state.productsReducer.products,
      searchresult: state.productsReducer.searchresult,
      filteredProducts: state.productsReducer.filteredProducts,
    };
  });

  useEffect(() => {
    const action = getProducts(state.products);
    dispatch(action);
    // displayData()
  }, []);

  const userstate = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      isLoggedIn: state.usersReducer.isLoggedIn,
    };
  });

  const cartstate = useSelector((state) => {
    return {
      cartList: state.cartListReducer.cartList,
    };
  });

  const addwish = (e) => {
    let newWish = [
      {
        id: userstate.currentUser.id,
        item: e,
      },
    ];
    const action = setWish(newWish[0]);
    dispatch(action);
    navigate(`/Wishlist`);
  };
  const addCart = (e) => {
    let newCart = [
      {
        id: userstate.currentUser.id,
        item: e,
        count: 0,
      },
    ];
    const action = setCart(newCart[0]);
    dispatch(action);
    console.log(newCart);
    console.log(cartstate.cartList);
    navigate(`/cart`);
  };
  
  return (
    <><Filter />
    <div className="container">
      <Search />
      <div className="cards">

        {state.searchresult !== undefined ? (state.searchresult.map((e) => {
          return (
            <div className="card">
              {userstate.isLoggedIn && (<div>
                <FaHeart
                  className="wish"
                  onClick={() => {
                    addwish(e);
                  }}
                />
              </div>)}
              <img
                className="img"
                src={e.image}
                alt=""
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              />
              <h3
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              >
                {e.name}
              </h3>
              <p>{e.description}</p>
              <div className="PriceAndBtn">
                <p id="price">{e.price} SAR</p>
                {userstate.isLoggedIn && (<button
                  id="cart"
                  onClick={() => {
                    addCart(e)
                  }}
                >
                  Add to cart
                </button>)}
              </div>
            </div>);
        })) : (state.filteredProducts !== undefined) ? (state.filteredProducts.map((e) => {
          return (
            <div className="card">
              {userstate.isLoggedIn && (<div>
                <FaHeart
                  className="wish"
                  onClick={() => {
                    addwish(e);
                  }}
                />
              </div>)}
              <img
                className="img"
                src={e.image}
                alt=""
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              />
              <h3
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              >
                {e.name}
              </h3>
              <p>{e.description}</p>
              <div className="PriceAndBtn">
                <p id="price">{e.price} SAR</p>
                {userstate.isLoggedIn && (<button
                  id="cart"
                  onClick={() => {
                    addCart(e)
                  }}
                >
                  Add to cart
                </button>)}
              </div>
            </div>);
        })) : (state.products.map((e) => {
          return (
            <div className="card">
              {userstate.isLoggedIn && (<div>
                <FaHeart
                  className="wish"
                  onClick={() => {
                    addwish(e);
                  }}
                />
              </div>)}
              <img
                className="img"
                src={e.image}
                alt=""
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              />
              <h3
                onClick={() => {
                  navigate(`/product/${e.id}`);
                }}
              >
                {e.name}
              </h3>
              <p>{e.description}</p>
              <div className="PriceAndBtn">
                <p id="price">{e.price} SAR</p>
                {userstate.isLoggedIn && (<button
                  id="cart"
                  onClick={() => {
                    addCart(e)
                  }}
                >
                  Add to cart
                </button>)}
              </div>
            </div>);
        }))}
      </div>

    </div></>
  )
}
export default Productpage;
