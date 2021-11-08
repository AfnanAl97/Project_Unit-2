import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
    <div className="header">
      <div className="logo"><h2><Link id="logo" to="/">Tech Store</Link></h2></div>

      <ul className="naveg" dir="rtl">

        <li><button type="button" onClick={()=>{
          navigate(`/login`);
        }}>Join Us</button></li>

        <li><Link id="heart" to="/Wishlist"><FaHeart/></Link></li>
        <li><Link id="shop" to="/cart"><FaShoppingBasket/></Link></li>
      </ul>
  </div>
    </>
  );
}
export default Header;