import { 
            FETCH_EPISODES_SUCCESS,
            FETCH_EPISODES_FAIL,
            FETCH_EPISODES_DETAILS_SUCCESS,
            FETCH_EPISODES_DETAILS_FAIL
        } from "./types";
import axios from "axios";

export const fetchEpisodesList =() =>async (dispatch) =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get("http://api.tvmaze.com/shows/6771/episodes",null,config);
        dispatch({
            type: FETCH_EPISODES_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FETCH_EPISODES_FAIL,
            payload: err.response.data.error,
        });
    }
}
export const fetchEpisodeDetails =(id) =>async (dispatch) =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.get(`http://api.tvmaze.com/episodes/${id}`,null,config);
        dispatch({
            type: FETCH_EPISODES_DETAILS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FETCH_EPISODES_DETAILS_FAIL,
            payload: err.response.data.error,
        });
    }
}
