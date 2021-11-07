import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Filter() {

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
            searchresult: state.productsReducer.searchresult,
            filteredProducts : state.productsReducer.filteredProducts,
        };
      });


    const [Category, setCategory] = useState();
    const byCategory = e => {
        setCategory(e.target.value);
    };
    const [Price, setPrice] = useState();
    const byprice = e => {
        setPrice(e.target.value);
    };

    const filtering= () => {
        const results = state.products.filter(e =>
            e.category == Category
        );
        console.log(results);
        const action = filtering(results);
        dispatch(action);
    }


    return (
        <>
        <div className="filter">
            <div className="form-1">
            <h3 id="bord">Filter</h3> 
            </div>
            <div className="form-1">
                <h3 id="bord">Categories</h3> 
                <label><input type="radio" onChange={byCategory} name="Category" value="All"/>All</label> 
                <label><input type="radio" onChange={byCategory} name="Category" value="Mobiles"/>Mobiles</label> 
                <label><input type="radio" onChange={byCategory} name="Category" value="PC"/>PC</label> 
                <label><input type="radio" onChange={byCategory} name="Category" value="Laptops"/>Laptops</label>
                <label><input type="radio" onChange={byCategory} name="Category" value="TV"/>TV</label>
                <label><input type="radio" onChange={byCategory} name="Category" value="Tablets"/>Tablets</label>
            </div>

            <div className="form-2">
                <h3 id="bord">Price range</h3> 
                <label><input type="radio" onChange={byprice} name="Price" value="under2000"/>under 2000 SAR</label> 
                <label><input type="radio" onChange={byprice} name="Price" value="2000to4000"/>2000 SAR to 4000 SAR</label> 
                <label><input type="radio" onChange={byprice} name="Price" value="5000to6000"/>5000 SAR to 6000 SAR</label>
                <label><input type="radio" onChange={byprice} name="Price" value="7000to9000"/>7000 SAR to 9000 SAR</label>
                <label><input type="radio" onChange={byprice} name="Price" value="9000andAbove"/>9000 SAR And Above</label>
            </div>

            <div className="form-3">
                <button id="filtering" onClick={filtering}>filtering</button>
            </div>
            </div>
        </>
    );
  }
  
  export default Filter;
  