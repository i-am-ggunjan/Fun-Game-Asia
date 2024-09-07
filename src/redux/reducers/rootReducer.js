import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import masterReducer from "./masterReducer";

const rootReducer = combineReducers({
    commonReducer,
    masterReducer,
});

export default rootReducer;