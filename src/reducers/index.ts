import { combineReducers } from "redux";
import currentItemReducer from "./currentItem";
import currentUserReducer from "./currentUser";
import itemsReducer from "./items";

const reducers = combineReducers({
    currentUser: currentUserReducer,
    items: itemsReducer,
    currentItem: currentItemReducer,
});

export default reducers;
