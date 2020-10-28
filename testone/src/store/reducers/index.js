import { combineReducers } from "redux";

import gists from './gists';
import error from './error';

const rootReducer = combineReducers({
  gists,
  error
});

export default rootReducer;