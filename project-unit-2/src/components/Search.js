import { useDispatch, useSelector } from "react-redux";
import { useEffect ,useState } from "react";
import {searching} from "../reducers/product/action"
function Search() {

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = e => {
        setSearchTerm(e.target.value);
        Sear();
      };

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            products: state.productsReducer.products,
            searchresult: state.productsReducer.searchresult,
        };
      });

    const Sear = () => {
        const results = state.products.filter(e =>
          e.name.includes(searchTerm)
        );
        console.log(results);
        const action = searching(results);
        dispatch(action);
    };

    return (
        <>
        <div className="search">
            <input type="text" placeholder="Search by Product Name" value={searchTerm} onChange={handleChange} id="srch"/>
        </div>
        </>
    );
  }
  
  export default Search;
  