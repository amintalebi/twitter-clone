import { combineReducers } from "redux";
import postReducer from "./postReducer";
import searchReducer from "./searchReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
    post: postReducer,
    search: searchReducer,
    account: accountReducer,
});

export default rootReducer;
