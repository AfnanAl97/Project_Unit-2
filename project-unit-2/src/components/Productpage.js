import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Search from "./Search";
import Filter from "./Filter";
import { FaHeart } from "react-icons/fa";
import { setWish } from "../reducers/wishlist/action";
import {getProducts} from "../reducers/product/action"
import { useEffect , useState } from "react";


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

  return (
    <>
      <Filter />
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
                          navigate(`/cart`);
                        }}
                      >
                        Add to cart
                      </button>)}
                    </div>
                  </div>);
              })) :(state.filteredProducts !== undefined) ? (state.filteredProducts.map((e) => {
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
                          navigate(`/cart`);
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
                          navigate(`/cart`);
                        }}
                      >
                        Add to cart
                      </button>)}
                    </div>
                  </div>);
              }))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Productpage;
