import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header">
      <div className="logo"><h2>Tech Store</h2></div>

      <ul className="naveg" dir="rtl">
        <li><button>Join Us</button></li>
        <li><Link id="heart" to="/"><FaHeart/></Link></li>
        <li><Link id="shop" to="/"><FaShoppingBasket/></Link></li>
      </ul>
  </div>
    {/* <div className="header">
    <h1>Header</h1>
    </div> */}
    </>
  );
}

export default Header;
