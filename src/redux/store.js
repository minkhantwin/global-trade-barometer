import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import comparatorReducer from "./comparator/comparatorReducer";


const store = createStore(comparatorReducer, applyMiddleware(logger));

export default store;