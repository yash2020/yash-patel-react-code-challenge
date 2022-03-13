import {combineReducers} from 'redux';
import homeDataReducer from './homeRed';
import universitiesDataReducer from './univerRed';

// COMBINED REDUCERS
const rootReducers = {
    posts: homeDataReducer,
    universities: universitiesDataReducer
}

export default combineReducers(rootReducers);