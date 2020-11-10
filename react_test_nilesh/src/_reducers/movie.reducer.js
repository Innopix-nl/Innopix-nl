import { movieConstants } from '../_constants';

//-- get the list of terms
export function getMoviesList(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_LIST_REQUEST:
      return {
        getMoviesList: false
      };

    case movieConstants.MOVIE_LIST_SUCCESS:
      return { isGetAdvertismentList:true , getMoviesList:action.successAction};

    case movieConstants.MOVIE_LIST_FAILURE:
      return {
        getMoviesList: false,
      };

    case movieConstants.MOVIE_SEARCH_REQUEST:
      return { isGetAdvertismentList:true , getMoviesList:successAction.data};

    default:
      return state
  }
}

//-- get the list of terms
export function getMovieDetails(state = {}, action) {
  switch (action.type) {
    case movieConstants.MOVIE_DETAIL_REQUEST:
      return {
        getMovieDetails: false
      };

    case movieConstants.MOVIE_DETAIL_SUCCESS:
      //console.log("REDUCER ", action.successAction);
      return { isGetAdvertismentList:true , getMovieDetails:action.successAction};

    case movieConstants.MOVIE_DETAIL_FAILURE:
      return {
        getMovieDetails: false,
      };

    default:
      return state
  }
}