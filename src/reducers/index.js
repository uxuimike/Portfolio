import { combineReducers } from "redux";

import feed from './feedReducer';
import view from './viewReducer';

export default combineReducers({
    feed,
    view
});
