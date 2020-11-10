import {  FETCH_EPISODES_DETAILS_SUCCESS,FETCH_EPISODES_DETAILS_FAIL,} from "../actions/types";
export default function (state = {}, action) {

    const { type } = action;
    switch (type) {
        case FETCH_EPISODES_DETAILS_SUCCESS:
            return {
                ...state,
                ...action,
            };
        case FETCH_EPISODES_DETAILS_FAIL:
            return {
                ...state,
                ...action,
            };
        default:
            return state;
    }
}
