import { GET_POSTALLOOK_DISPATCH, GET_POSTALLOOK_FAIL, GET_POSTALLOOK_SUCCESS } from "../type"

const intialState = {
    loading: false,
    data: [],
    error:''
};

const postalLookDataReducer = (state = intialState, action) => {

    const { type, payload } = action;

    switch(type){
        case GET_POSTALLOOK_DISPATCH:
            return {
                ...state,
                loading: true
            }
        case GET_POSTALLOOK_SUCCESS:
            return{
                ...state,
                data: payload,
                error: '',
                loading: false
            }
        case GET_POSTALLOOK_FAIL:
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

export default postalLookDataReducer;