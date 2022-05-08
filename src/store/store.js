import { createStore, combineReducers, applyMiddleware} from "redux";
import { cashReducer } from "./cashReducer";
import { counterReducer } from "./counterReducer";
import {customerReducer } from "./customerReducer";
//import thunk from 'redux-thunk'
import createSagaMiddleware from'redux-saga';
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cash : cashReducer, 
    customers : customerReducer,
    count : counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);