import { combineReducers } from 'redux';
import fetchEpisodes from './fetchEpisodes';
import episodeDetails from './episodeDetails';
export default combineReducers({
    fetchEpisodes,
    episodeDetails
});