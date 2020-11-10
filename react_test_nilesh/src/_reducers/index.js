import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { language } from './language.reducer';
import { modelalert } from'./modelalert.reducer';
import { getMoviesList, getMovieDetails } from './movie.reducer';


const rootReducer = combineReducers({
  alert,
  language,
  modelalert,
  getMoviesList,
  getMovieDetails
});

export default rootReducer;