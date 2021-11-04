import { createStore, combineReducers } from "redux";
import usersReducer from "./SignupLogin/reducer"

const reducers = combineReducers({usersReducer});

const store = createStore(reducers);

export default store;
