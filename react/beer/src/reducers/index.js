import { combineReducers } from 'redux';
import dateReducer from "./dateReducer";
import counterReducer from './counterReducer';
import favouriteBeersReducer from './favouriteBeersReducers';

const rootReducer = combineReducers({ counterReducer, dateReducer, favouriteBeersReducer });

export default rootReducer;
