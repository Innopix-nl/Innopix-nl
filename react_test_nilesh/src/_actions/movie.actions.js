import { movieConstants } from '../_constants';
import * as commonAction from './commonAction';
import { movieService, commonService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';
import { apiConstants } from '../_constants/api.constants';


export const movieActions = {
    getMoviesList,
    getMovieDetails,
};


//-- getEventsList
function getMoviesList(apiName, eventData) {

    return dispatch => {
        dispatch(commonAction.request(movieConstants.MOVIE_LIST_REQUEST, eventData));
        movieService.getMoviesList(apiName, eventData)
            .then(
                movie => {

                    dispatch(commonAction.success(movieConstants.MOVIE_LIST_SUCCESS, movie.data));
                    if (movie.success == false) {
                        dispatch(commonAction.failure(movieConstants.MOVIE_LIST_ERROR, movie.message));
                        dispatch(alertActions.error(movie.message));
                    }
                },
                error => {
                    dispatch(alertActions.error(error.response.data.error));
                }
            );
    };
}
//-- Get movie detail on profile page
function getMovieDetails(apiName, eventData) {
    return dispatch => {
        dispatch(commonAction.request(movieConstants.MOVIE_DETAIL_REQUEST, eventData));
        movieService.getMovieDetails(apiName, eventData)
            .then(
                movie => {
                    //console.log("Successfully",movie.data);
                    dispatch(commonAction.success(movieConstants.MOVIE_DETAIL_SUCCESS, movie.data));
                    if (movie.success == false) {
                        dispatch(commonAction.failure(movieConstants.MOVIE_DETAIL_FAILURE, movie.message));
                        dispatch(alertActions.error(movie.message));
                    }
                },
                error => {
                    dispatch(alertActions.error(error.response.data.error));
                }
            );
    };
}