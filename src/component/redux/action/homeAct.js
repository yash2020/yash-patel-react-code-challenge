
import { axiosInst } from "../apiCaller";
import { GET_HOMEDATA_DISPATCH, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_FAIL, DELETE_HOMEDATA_FAIL, DELETE_HOMEDATA_SUCCESS } from "../type"


export const fetchHomeData = () => async dispatch => {
    // This is to Call Axio api
    dispatch({type: GET_HOMEDATA_DISPATCH});

    await axiosInst.get('? _start=0&amp;_limit=20',{}).then((response)=>{
        dispatch({
            type: GET_HOMEDATA_SUCCESS,
            payload: response.data,
        });
    }).catch((error)=>{
        dispatch({
            type: GET_HOMEDATA_FAIL,
            payload: error
        });
    });
}

export const deletePost = (id) => async dispatch =>{
    dispatch({type: GET_HOMEDATA_DISPATCH});

    await axiosInst.delete('/'+id,{}).then((response)=>{
        console.log(response);
        dispatch({
            type: DELETE_HOMEDATA_SUCCESS,
            payload: response.data,
        });
    }).catch((error)=>{
        dispatch({
            type: DELETE_HOMEDATA_FAIL,
            payload: error
        });
    });
}