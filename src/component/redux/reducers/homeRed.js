import { GET_HOMEDATA_DISPATCH, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_FAIL } from "../type"

const intialState = {
    loading: false,
    data: [],
    error:''
};

const homeDataReducer = (state = intialState, action) => {

    const { type, payload } = action;

    switch(type){
        case GET_HOMEDATA_DISPATCH:
            return {
                ...state,
                loading: true
            }
        case GET_HOMEDATA_SUCCESS:
            return{
                ...state,
                data: payload,
                error: '',
                loading: false
            }
        case GET_HOMEDATA_FAIL:
            return{
                ...state,
                data: [],
                error: payload,
                loading: false
            }
        default: 
            return state

    }
}

export default homeDataReducer;