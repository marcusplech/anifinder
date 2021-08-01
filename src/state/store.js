import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers/index";

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, enhancers(applyMiddleware()));
