import React from "react";
import {setProducts} from "../reducers/product/action";
import {useDispatch} from "react-redux";

function Adminpage() {

    const dispatch = useDispatch();
    let arrayProduct = {};

    const addProduct = () => {
        
        let inputId = prompt("Product id: ")
        let inputName = prompt("Product name: ")
        // console.log(inputVal)
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
        </>

    );
  }
  
  export default Adminpage;
  