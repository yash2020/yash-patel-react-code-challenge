import {combineReducers} from 'redux';
import homeDataReducer from './homeRed';
import postalLookDataReducer from './postalLookRed';
import universitiesDataReducer from './univerRed';

// COMBINED REDUCERS
const rootReducers = {
    posts: homeDataReducer,
    postLook: postalLookDataReducer,
    universities: universitiesDataReducer
}

export default combineReducers(rootReducers);