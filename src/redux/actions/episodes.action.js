import { episodesType } from "../types";
import { message } from "antd";
import { getService } from "../../_helpers/httpService";


const fetchEpisode = (endPoint, data) => async (dispatch) => {
    message.loading('Loading record');
    dispatch({ type: episodesType.FETCH_EPISODE_REQUEST })
    await getService(endPoint, data)
        .then(response => {
            dispatch({ type: episodesType.FETCH_EPISODE_SUCCESS, response: response.data })
        }).catch(error => {

            message.error('Error fetcing the record');
            dispatch({ type: episodesType.FETCH_EPISODE_SUCCESS })
        })
}

export const episodeAction = {
    fetchEpisode
}