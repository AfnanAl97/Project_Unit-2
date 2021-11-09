import React from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setProducts, deleteProduct, updateProducts } from "../reducers/product/action";

function Adminpage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
      return { products: state.productsReducer.products, }});

  const userstate = useSelector((state) => {
        return {
          currentUser: state.usersReducer.currentUser,
        };
  });

    let newProduct = {};
    let newUpdate = {};

    const addProduct = (e) => {
        
        let inputId = prompt("Product id: ")
        let inputName = prompt("Product name: ")
        let inputPrice = prompt("Product price: ")
        let inputDescription = prompt("Product description: ")
        let inputCategory = prompt("Product category: ")
        let inputImage = prompt("Product image: ")
        newProduct = {
            id: inputId, 
            name: inputName, 
            price: inputPrice, 
            description: inputDescription,
            category: inputCategory,
            image: inputImage
        }
        const action = setProducts() 
        dispatch(action)
    }

    const updateProduct = (e) => {

      let newArr=[]
      

      let newName = prompt("New name: ",e.name)
      let newPrice = prompt("New price: ",e.price)
      let newDescription = prompt("New description: ",e.description)
      let newCategory = prompt("New category: ",e.category)
      let newImage = prompt("New image: ",e.image)
      newUpdate = {
        id:e.id,
        name: newName,
        price: newPrice,
        description: newDescription,
        category: newCategory,
        image: newImage
      }
      newArr.push(newUpdate)

      console.log(newUpdate);
      console.log(newArr);
      const action = updateProducts(newArr)
      dispatch(action)
    }

    return (
        <>
        <div className="cards2">
        <div className="admin-page">
         <div className="admin-card">
           <div className="admin-btnn">
            <form>
              <p className="admin-btn" onClick={addProduct}><a href="#">+</a></p>
            </form>
           </div>
         </div>
        </div>
        {state.products.map((e) => {
                return (
                  <div className="card2">
                    <img
                      className="img"
                      src={e.image}
                      alt=""
                      onClick={() => {
                        navigate(`/product/${e.id}`);
                      }}
                    />
                    <h3 onClick={() => {navigate(`/product/${e.id}`);}}>
                      {e.name}
                    </h3>
                    <p>{e.description}</p>
                    <button
                    id="delete"
                    onClick={() => {
                      let deleteItem = [
                        {
                          id: userstate.currentUser.id,
                          itemId: e.id,
                        },
                      ];
                      const action = deleteProduct(deleteItem[0]);
                      dispatch(action);
                    }}
                  >
                    Delete
                  </button>
                  <button 
                  id="update"
                  onClick={() => {
                    let updateItem = 
                      {
                        id: userstate.currentUser.id,
                        // itemId: e.id,
                      }
                    
                    updateProduct(e);
                    
                  }}
                  >
                    Update
                  </button>
                  </div>
                );
              })}
        </div>
        </>

    );
  }
  
  export default Adminpage;
  