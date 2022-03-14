import Axios from "axios";
import { BASE_URL, SEARCH_URL } from "./type";

export const axiosInst = Axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json'
    }
});


export const axiosSearchInst = Axios.create({
    baseURL: SEARCH_URL,
    headers: {
        'Accept': 'application/json'
    }
});