import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import users from "./userReducer";
import view from './viewReducer';

export default combineReducers({
    tweets,
    users,
    view
});
