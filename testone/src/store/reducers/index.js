import { combineReducers } from "redux";

import gists from './gists';

const rootReducer = combineReducers({
  gists
});

export default rootReducer;