import React from 'react'
import "./header.css";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";


const Header = () => {
  return (
    <div id="heade">
      <header className="m_header"  >
        <nav className="m_nav">Header ttitle </nav>
        <ul id="li" className="navge" dir="rtl">
          <li><a><b>sing up</b></a></li>
          <li><a><b>log in</b></a></li>
          <li><a><FaHeart /></a></li>
          <li><a><FaShoppingBasket /></a></li>
        </ul>
        <hr />
      </header>
    </div>
      <div className="header">
      <h1>Header</h1>
      </div>
  );
}
export default Header;