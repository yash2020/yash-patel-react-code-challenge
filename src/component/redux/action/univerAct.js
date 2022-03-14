
import { axioCountries, axioUniversity } from "../apiCaller";
import { GET_UNIVERSITIES_CITIES, GET_UNIVERSITIES_DATA_DISPATCH, GET_UNIVERSITIES_DATA_FAIL, GET_UNIVERSITIES_DATA_SUCCESS, GET_UNIVERSITIES_CITIES_FAIL } from "../type"


export const fetchUniversitiesData = (selectedCountry) => async dispatch => {
    // This is to Call Axio api
    dispatch({ type: GET_UNIVERSITIES_DATA_DISPATCH });
    // var defaultCountry = 'Canada';

    await axioUniversity.get(`search?country=${selectedCountry}`, {}).then((response) => {
        dispatch({
            type: GET_UNIVERSITIES_DATA_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_UNIVERSITIES_DATA_FAIL,
            payload: error
        });
    });
}

export const fetchCountryNames = () => async dispatch => {
    console.log('fetching County Name');
    await axioCountries.get().then((response) => {
        console.log(response);
        dispatch({
            type: GET_UNIVERSITIES_CITIES,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_UNIVERSITIES_CITIES_FAIL,
            payload: error
        });
    });
}