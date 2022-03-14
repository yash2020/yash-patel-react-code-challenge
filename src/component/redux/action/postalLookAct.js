
import { axiosSearchInst } from "../apiCaller";
import { GET_POSTALLOOK_DISPATCH, GET_POSTALLOOK_FAIL, GET_POSTALLOOK_SUCCESS } from "../type"


const getPostalInfo = (searchString) => async dispatch => {
    // This is to Call Axio api
    dispatch({type: GET_POSTALLOOK_DISPATCH});
    console.log(searchString);

    await axiosSearchInst.get('/'+searchString,{}).then((response)=>{
        console.log(response);
        dispatch({
            type: GET_POSTALLOOK_SUCCESS,
            payload: response.data,
        });
    }).catch((error)=>{
        dispatch({
            type: GET_POSTALLOOK_FAIL,
            payload: error
        });
    });
}

export default getPostalInfo;