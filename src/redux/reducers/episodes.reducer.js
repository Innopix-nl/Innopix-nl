import { episodesType } from "../types";

export { fetchEpisode };


function fetchEpisode(state = { response: {}, loading: false }, action) {

    const { type, response } = action;

    switch (type) {

        case episodesType.FETCH_EPISODE_REQUEST:
            return { loading: true };
        case episodesType.FETCH_EPISODE_SUCCESS:
            return { loading: false, response }
        case episodesType.FETCH_EPISODE_ERROR:
            return { loading: false }

        default:
            return {};
    }
}
