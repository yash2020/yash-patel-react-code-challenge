import Axios from "axios";
import { BASE_URL } from "./type";

export const axiosInst = Axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json'
    }
});