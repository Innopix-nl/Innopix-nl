import { combineReducers } from "redux";
import { fetchEpisode } from "./episodes.reducer";
import { fetchTVShows } from "./tvshows.reducer";

const rootReducer = combineReducers({
    fetchEpisode,
    fetchTVShows
});

export default rootReducer;