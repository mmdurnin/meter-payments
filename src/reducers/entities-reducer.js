import { combineReducers } from "redux";
import ActiveSessionsReducer from "./active-sessions-reducer";
import CompleteSessionsReducer from "./complete-sessions-reducer";

const EntitiesReducer = combineReducers({
    activeSessions: ActiveSessionsReducer,
    completeSessions: CompleteSessionsReducer
});

export default EntitiesReducer;
