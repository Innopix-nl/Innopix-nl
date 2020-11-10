import { eventConstants } from '../_constants';

//-- get the list of terms
export function getUserEventList(state = {}, action) {
  switch (action.type) {
    case eventConstants.EVENT_LIST_REQUEST:
      return {
        getUserEventList: false
      };

    case eventConstants.EVENT_LIST_SUCCESS:
      //console.log("REDUCER ", action);
      return { isGetAdvertismentList:true , getUserEventList:action.successAction};

    case eventConstants.EVENT_LIST_FAILURE:
      return {
        getUserEventList: false,
      };

    case eventConstants.EVENT_SEARCH_REQUEST:
      return { isGetAdvertismentList:true , getUserEventList:successAction.data};

    default:
      return state
  }
}

export function addEvent(state = {}, action) {
  switch (action.type) {
    case eventConstants.EVENT_ADD_REQUEST:
      return {
        addEvent: false
      };

    case eventConstants.EVENT_ADD_SUCCESS:      
      return { addEvent: action.successAction };

    case eventConstants.EVENT_ADD_FAILURE:
      return {
        addEvent: false,
      }; 

    default:
      return state
  }
}


export function deleteEvent(state = {}, action) {
  switch (action.type) {
    case eventConstants.EVENT_DELETE_REQUEST:
      return {
        deleteEvent: false
      };

    case eventConstants.EVENT_DELETE_SUCCESS:      
      return { deleteEvent: action.successAction };

    case eventConstants.EVENT_DELETE_FAILURE:
      return {
        deleteEvent: false,
      }; 

    default:
      return state
  }
}

//-- get the list of terms
export function getEventDetails(state = {}, action) {
  switch (action.type) {
    case eventConstants.EVENT_DETAIL_REQUEST:
      return {
        getEventDetails: false
      };

    case eventConstants.EVENT_DETAIL_SUCCESS:
      //console.log("REDUCER ", action.successAction);
      return { isGetAdvertismentList:true , getEventDetails:action.successAction};

    case eventConstants.EVENT_DETAIL_FAILURE:
      return {
        getEventDetails: false,
      };

    default:
      return state
  }
}