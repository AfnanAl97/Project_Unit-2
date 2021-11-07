import { createStore, combineReducers } from "redux";
import usersReducer from "./SignupLogin/reducer"
import productsReducer from "./product/reducer"
import wishlistReducer from "./wishlist/reducer"

const reducers = combineReducers({usersReducer, productsReducer, wishlistReducer});

const store = createStore(reducers);

export default store;
