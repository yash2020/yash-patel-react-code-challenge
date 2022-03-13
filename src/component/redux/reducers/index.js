import {combineReducers} from 'redux';
import homeDataReducer from './homeRed';

// COMBINED REDUCERS
const rootReducers = {
    posts: homeDataReducer,
}

export default combineReducers(rootReducers);