import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import newsReducer from "./reducers";
import loading from "./reducers";

const rootReducer = combineReducers({newsReducer, loading});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

