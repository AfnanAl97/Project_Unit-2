import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setWish } from "../reducers/wishlist/action";
import { setCart } from "../reducers/cart/action";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const state = useSelector((state) => {
    return {
      products: state.productsReducer.products,
    };
  });
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

  const addCart = (e) => {
    let newCart = [
      {
        id: userstate.currentUser.id,
        item: e,
      },
    ];
    const action = setCart(newCart[0]);
    dispatch(action);
    navigate(`/cart`);
  };
  return (
    <>
      {state.products !== undefined
        ? state.products.map((e) => {
            if (e.id === parseInt(id)) {
              return (
                <div className="parent">
                  <div className="details">
                    {userstate.isLoggedIn && (
                      <div>
                        <FaHeart
                          className="wish"
                          onClick={() => {
                            addwish(e);
                          }}
                        />
                      </div>
                    )}
                    <img className="img" alt="" src={e.image} />
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <div className="PriceAndBtn">
                      <p id="price">{e.price} SAR</p>
                      {userstate.isLoggedIn && (
                        <button
                          id="cart"
                          onClick={() => {
                            addCart(e);
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return console.log(id);
          })
        : "wait .. "}
    </>
  );
}

export default ProductDetails;
