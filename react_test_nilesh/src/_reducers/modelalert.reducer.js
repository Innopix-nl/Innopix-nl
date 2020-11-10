import { modelalertConstants } from '../_constants';

export function modelalert(state = {}, action) {
  switch (action.type) {
    case modelalertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case modelalertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case modelalertConstants.CLEAR:
      return {};
    default:
      return state
  }
}