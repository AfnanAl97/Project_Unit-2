import React from "react";
import {setProducts} from "../reducers/product/action";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Adminpage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let arrayProduct = {};

    const addProduct = () => {
        
        let inputId = prompt("Product id: ")
        let inputName = prompt("Product name: ")
        let inputPrice = prompt("Product price: ")
        let inputDescription = prompt("Product description: ")
        let inputCategory = prompt("Product category: ")
        let inputImage = prompt("Product image: ")
        arrayProduct = {
            id: inputId, 
            name: inputName, 
            price: inputPrice, 
            description: inputDescription,
            category: inputCategory,
            image: inputImage
        }
        const action = setProducts(arrayProduct) 
        dispatch(action)
    }
    const state = useSelector((state) => {
        return {products: state.productsReducer.products,}});

    return (
        <>
        <div className="admin-page">
         <div className="admin-card">
           <div className="admin-btnn">
            <form>
              <p className="admin-btn" onClick={addProduct}><a href="#">+</a></p>
            </form>
           </div>
         </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////// */}
        <div className="cards2">
            {state.products.map((e)=>{
           <div className="card2">
            <img className="img" src={e.image} alt="" onClick={() => {navigate(`/product/${e.id}`)}}/>
                        <h3 onClick={() => {navigate(`/product/${e.id}`)}}>{e.name}</h3>
                        <p>{e.description}</p>
                        <div className="PriceAndBtn2">
                        <p id="price2">{e.price} SAR</p>
                </div>
           </div>})}
        </div>
        </>

    );
  }
  
  export default Adminpage;
  