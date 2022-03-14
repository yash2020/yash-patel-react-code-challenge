
import { axiosInst } from "../apiCaller";
import { GET_HOMEDATA_ID_SUCCESS, GET_HOMEDATA_DISPATCH, GET_HOMEDATA_SUCCESS, GET_HOMEDATA_FAIL, DELETE_HOMEDATA_FAIL, DELETE_HOMEDATA_SUCCESS } from "../type"


export const fetchHomeData = () => async dispatch => {
    // This is to Call Axio api
    dispatch({ type: GET_HOMEDATA_DISPATCH });

    await axiosInst.get('? _start=0&amp;_limit=20', {}).then((response) => {
        dispatch({
            type: GET_HOMEDATA_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_HOMEDATA_FAIL,
            payload: error
        });
    });
}

export const deletePost = (id) => async dispatch => {
    dispatch({ type: GET_HOMEDATA_DISPATCH });

    await axiosInst.delete('/' + id, {}).then((response) => {
        console.log(response);
        dispatch({
            type: DELETE_HOMEDATA_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: DELETE_HOMEDATA_FAIL,
            payload: error
        });
    });
}

export const getPostById = (id) => async dispatch => {
    dispatch({ type: GET_HOMEDATA_DISPATCH });

    await axiosInst.get('/' + id, {}).then((response) => {
        console.log(response);
        dispatch({
            type: GET_HOMEDATA_ID_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_HOMEDATA_FAIL,
            payload: error
        });
    });
}

export const updatePostById = (id, data) => async dispatch => {
    dispatch({ type: GET_HOMEDATA_DISPATCH });

    await axiosInst.put('/' + id, data).then((response) => {
        console.log(response);
        dispatch({
            type: GET_HOMEDATA_ID_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_HOMEDATA_FAIL,
            payload: error
        });
    });
}

export const addPost = ( data) => async dispatch => {
    dispatch({ type: GET_HOMEDATA_DISPATCH });

    await axiosInst.post('', data).then((response) => {
        console.log(response);
        dispatch({
            type: GET_HOMEDATA_ID_SUCCESS,
            payload: response.data,
        });
    }).catch((error) => {
        dispatch({
            type: GET_HOMEDATA_FAIL,
            payload: error
        });
    });
}