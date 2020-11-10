import {  FETCH_EPISODES_SUCCESS,FETCH_EPISODES_FAIL,} from "../actions/types";
export default function (state = {}, action) {

    const { type } = action;
    switch (type) {
        case FETCH_EPISODES_SUCCESS:
            return {
                ...state,
                ...action,
            };
        case FETCH_EPISODES_FAIL:
            return {
                ...state,
                ...action,
            };
        default:
            return state;
    }
}
