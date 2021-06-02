
import thunk from 'redux-thunk';
import rentReducer from './reducers/rentReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from 'redux';

const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    houses: rentReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))