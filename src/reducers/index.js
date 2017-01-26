import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import users from "./userReducer";
import view from './viewReducer';
import backslide from './backslideReducer'

export default combineReducers({
    tweets,
    users,
    view,
    backslide

});
