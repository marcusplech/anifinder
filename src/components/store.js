import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers";

const initialState = {};

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    enhancers(applyMiddleware())
);

export default store;
