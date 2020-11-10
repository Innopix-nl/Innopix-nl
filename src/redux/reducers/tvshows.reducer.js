import { tvShowsType } from "../types";

export { fetchTVShows };

function fetchTVShows(state = { response: [], loading: false }, action) {

    const { type, response } = action;

    switch (type) {

        case tvShowsType.FETCH_REQUEST:
            return { loading: true };
        case tvShowsType.FETCH_SUCCESS:
            return { loading: false, response }
        case tvShowsType.FETCH_SUCCESS:
            return { loading: false }


        default:
            return {};
    }
}