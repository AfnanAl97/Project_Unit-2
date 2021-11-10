import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtering } from "../reducers/product/action";

function Filter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      products: state.productsReducer.products,
      searchresult: state.productsReducer.searchresult,
      filteredProducts: state.productsReducer.filteredProducts,
    };
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);
  const [Price, setPrice] = useState(0);
  const byprice = (e)=> {
    setPrice(e.target.value);
  }

  const [Category, setCategory] = useState();
  const byCategory = (e) => {
    setCategory(e.target.value);
  };

  const filterprice = () =>{
    let price = parseInt(Price);
    console.log(price,price <= 3000 );
    if(price <= 3000){
      console.log("3000 or min");
      filter(0,3000);
    } 
    if(price >= 3001 && price <= 5000){
      console.log("3001 to 5000");
      filter(3001,5000);

    } 
    if(price >= 5001 && price <= 7000){
      console.log("5001 to 7000");
      filter(5001,7000);
    } 
    if(price >= 7001 && price <= 10000){
      console.log("7001 to 10000");
      filter(7001,10000);

    } 
    if(price >= 10000){
      console.log("10000");
      filter(10000,Infinity);

    }
  }

  const filter = (min,max) => {
    console.log('fsddsfdfdfsd');
    setMin(min);
    setMax(max);
    const results = state.products.filter((e) => e.category === Category && e.price >= min && e.price <= max);
    const action = filtering(results);
    console.log("min "+ min);
    console.log("max "+max);
    dispatch(action);
  };

  return (
    <>
      <div className="filter">
        <div className="form-1">
          <h3 id="bord">Filter</h3>
        </div>
        <div className="form-1">
          <h3 id="bord">Categories</h3>
          <label>
            <input
              type="radio"
              onChange={byCategory}
              name="Category"
              value="Mobiles"
            />
            Mobiles
          </label>
          <label>
            <input
              type="radio"
              onChange={byCategory}
              name="Category"
              value="PC"
            />
            PC
          </label>
          <label>
            <input
              type="radio"
              onChange={byCategory}
              name="Category"
              value="Laptops"
            />
            Laptops
          </label>
          <label>
            <input
              type="radio"
              onChange={byCategory}
              name="Category"
              value="TV"
            />
            TV
          </label>
          <label>
            <input
              type="radio"
              onChange={byCategory}
              name="Category"
              value="Tablets"
            />
            Tablets
          </label>
        </div>

        <div className="form-2">
                <h3 id="bord">Price range</h3> 
                <label><input type="radio" onChange={byprice} name="Price" value="3000"/>under 3000 SAR</label> 
                <label><input type="radio" onChange={byprice} name="Price" value="3001"/>3000 SAR to 5000 SAR</label> 
                <label><input type="radio" onChange={byprice} name="Price" value="5001"/>5000 SAR to 7000 SAR</label>
                <label><input type="radio" onChange={byprice} name="Price" value="7001"/>7000 SAR to 10000 SAR</label>
                <label><input type="radio" onChange={byprice} name="Price" value="10000"/>10000 SAR And Above</label>
            </div>

        <div className="form-3">
          <button id="filtering" onClick={()=>{filterprice(); }}>
            filtering
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
