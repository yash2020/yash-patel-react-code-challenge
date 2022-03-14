import {combineReducers} from 'redux';
import homeDataReducer from './homeRed';
import postalLookDataReducer from './postalLookRed';

// COMBINED REDUCERS
const rootReducers = {
    posts: homeDataReducer,
    postLook: postalLookDataReducer
}

export default combineReducers(rootReducers);