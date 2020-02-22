import { RECEIVE_ACTIVE } from "../actions/meter-actions";

const ActiveSessionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVE:
            let active = action.activeSessions;
            return Object.assign({}, active);
        default:
            return state;
    }
};

export default ActiveSessionsReducer;
