import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import users from "./userReducer";

export default combineReducers({
    tweets,
    users
});
