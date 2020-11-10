import { tvShowsType } from "../types";
import { getService } from "../../_helpers/httpService";
import { message } from "antd";

const fetchTVShows = (endPoint, data) => async (dispatch) => {
    message.loading('Loading records');
    dispatch({ type: tvShowsType.FETCH_REQUEST })
    await getService(endPoint, data)
        .then(response => {
            dispatch({ type: tvShowsType.FETCH_SUCCESS, response: response.data })
        }).catch(error => {

            message.error('Error fetcing the records');
            dispatch({ type: tvShowsType.FETCH_ERROR })
        })
}

export const tvShowAction = {
    fetchTVShows
}