import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";

const reducers = combineReducers({
    fetch: fetchReducer,
});

export default reducers;
