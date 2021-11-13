import { createStore, combineReducers } from "redux";
import usersReducer from "./SignupLogin/reducer";
import productsReducer from "./product/reducer";
import wishlistReducer from "./wishlist/reducer";
import cartListReducer from "./cart/reducer";
import PrevOrderReducer from "./PreviousOders/reducer";

const reducers = combineReducers({
  usersReducer,
  productsReducer,
  wishlistReducer,
  cartListReducer,
  PrevOrderReducer,
});

const store = createStore(reducers);

export default store;
