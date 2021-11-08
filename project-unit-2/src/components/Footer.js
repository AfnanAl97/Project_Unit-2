import React from "react";
import "./Footer.css" 
 import { useState, useEffect } from "react";
 import { useSelector } from "react-redux";
 import {AiOutlineArrowLeft} from "react-icons/ai";

import {AiOutlineArrowRight} from "react-icons/ai";
 import { FaFacebook } from "react-icons/fa";
 import {BsArrowRight} from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";
 import { FaGoogle } from "react-icons/fa";

 import Pagination from "react-js-pagination";
 import ReactPaginat from "react-paginate";
 

// or less ideally
import { Button } from 'react-bootstrap';
 // Example items, to simulate fetching from another resources.
 function Items({ currentItems }) {
   return (
     <>
       {currentItems &&
         currentItems.map((item) => (
           <div>
 <a>Item #{item.id}</a>
           </div>
         ))}
     </>
   );
 }
 const Footer = ({itemsPerPage }) => {
     const state = useSelector((state)=>{
         return{
             productss: state.productsReducer.products
         }
      
     })
     let items = state.productss;
      // We start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   // Here we use item offsets; we could also use page offsets
   // following the API or data you're working with.
   const [itemOffset, setItemOffset] = useState(0);
   useEffect(() => {
     // Fetch items from another resources.
     const endOffset = itemOffset + itemsPerPage;
     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
     setCurrentItems(items.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(items.length / itemsPerPage));
   }, [itemOffset, itemsPerPage]);
   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
     const newOffset = (event.selected * itemsPerPage) % items.length;
     console.log(
       `User requested page number ${event.selected}, which is offset ${newOffset}`
     );
     setItemOffset(newOffset);
   };
     return (
         <div id="footer">

             { <footer>
              
                 <div id='iconn' align='center'>
                 <productsReducer>
                 <AiOutlineArrowLeft />Previous
                   <button>{Items,1}</button>
                   <button>{Items,2}</button>
                   <button>{3}</button>
                   ......
                   <button>{7}</button>
                 
                   <button id='n'>Next<AiOutlineArrowRight /></button>
</productsReducer>
                 </div>
             </footer> }
   //productsReducer.Pagination
          
         </div>
     )
 }
 export default Footer;