import { GET_UNIVERSITIES_CITIES_FAIL, GET_UNIVERSITIES_CITIES, GET_UNIVERSITIES_DATA_DISPATCH, GET_UNIVERSITIES_DATA_FAIL, GET_UNIVERSITIES_DATA_SUCCESS } from "../type"

const intialState = {
    loading: false,
    data: [],
    cities: [],
    error: ''
};

const universitiesDataReducer = (state = intialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_UNIVERSITIES_DATA_DISPATCH:
            return {
                ...state,
                loading: true
            }
        case GET_UNIVERSITIES_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                error: '',
                loading: false
            }
        case GET_UNIVERSITIES_DATA_FAIL:
            return {
                ...state,
                data: [],
                error: payload,
                loading: false
            }
        case GET_UNIVERSITIES_CITIES:
            return {
                ...state,
                cities: payload,
                loading: false
            }
        case GET_UNIVERSITIES_CITIES_FAIL:
            return {
                ...state,
                cities: [],
                error: payload,
                loading: false
            }
        default:
            return state

    }
}

export default universitiesDataReducer;