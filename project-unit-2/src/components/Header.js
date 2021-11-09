import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../reducers/SignupLogin/action";
import { useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userstate = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      isLoggedIn: state.usersReducer.isLoggedIn,
    };
  });

  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>
            <Link id="logo" to="/">
              Tech Store
            </Link>
          </h2>
        </div>

        <ul className="naveg" dir="rtl">
          <li>
            {!userstate.isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  navigate(`/login`);
                }}
              >
                Join Us
              </button>
            )}
          </li>

          {userstate.isLoggedIn && (
            <><li>
              <Link
                id="logout"
                to="/"
                onClick={() => {
                  const action = logout();
                  dispatch(action);
                } }
              >
                <FaSignOutAlt />
              </Link>
            </li><li>
                <Link id="heart" to="/Wishlist">
                  <FaHeart />
                </Link>
              </li><li>
                <Link id="shop" to="/cart">
                  <FaShoppingBasket />
                </Link>
              </li></>          )}
        </ul>
      </div>
    </>
  );
}
export default Header;
