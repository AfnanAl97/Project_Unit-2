import { createStore, combineReducers } from "redux";
import usersReducer from "./SignupLogin/reducer"
import productsReducer from "./product/reducer"

const reducers = combineReducers({usersReducer, productsReducer});

const store = createStore(reducers);

export default store;
