import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import Footer from "./Footer";
import Search from "./Search";

function Productpage() {

    // const dispatch = useDispatch();
    // const history = useHistory();

    const filtering= (e) => {}
    const getall= (e) => {}

    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
        };
      });

    return (
        <>
            <div className="filter">
            <div className="form-1">
            <h3 id="bord">Filter</h3> 
            </div>
            <div className="form-1">
                <h3 id="bord">Categories</h3> 
                <label><input type="radio" onChange={getall} name="Category" value="All"/>All</label> 
                <label><input type="radio" onChange={filtering} name="Category" value="Mobiles"/>Mobiles</label> 
                <label><input type="radio" onChange={filtering} name="Category" value="PC"/>PC</label> 
                <label><input type="radio" onChange={filtering} name="Category" value="Laptops"/>Laptops</label>
                <label><input type="radio" onChange={filtering} name="Category" value="TV"/>TV</label>
                <label><input type="radio" onChange={filtering} name="Category" value="Tablets"/>Tablets</label>

            </div>
            <div className="form-2">
                <h3 id="bord">Price range</h3> 
                <label><input type="radio" onChange={filtering} name="Price" value="under2000"/>under 2000 SAR</label> 
                <label><input type="radio" onChange={filtering} name="Price" value="2000to4000"/>2000 SAR to 4000 SAR</label> 
                <label><input type="radio" onChange={filtering} name="Price" value="4000to6000"/>4000 SAR to 6000 SAR</label>
                <label><input type="radio" onChange={filtering} name="Price" value="7000to9000"/>7000 SAR to 9000 SAR</label>
                <label><input type="radio" onChange={filtering} name="Price" value="9000andAbove"/>9000 SAR And Above</label>
            </div>
            <div className="form-3">
                <button id="filtering">filtering</button>
            </div>
            </div>

            <div className="container">
                <Search/>
                <div className="cards">
                {state.products !== undefined ? 
                (state.products.map((e)=>{return(
                <div className="card">
                    <img className="img" src={e.image}/>
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <div className="PriceAndBtn">
                    <p id="price">{e.price} SAR</p>
                    <button id="cart">Add to cart</button>
                    </div>
                </div>) })) :("wait .. ") } 
                
                </div>
                <Footer/>
            </div>

        </>
    );
  }
  
  export default Productpage;
  