import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { counter } from './state/counter';
import { products } from './state/products';


const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result
};

const middlewareEnhancer = applyMiddleware(thunk, loggerMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middlewareEnhancer)

const resucer = combineReducers({
    counter,
    products
})

export const store = createStore(resucer, enhancer)