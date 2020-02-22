import { RECEIVE_COMPLETE } from "../actions/meter-actions";

const CompleteSessionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMPLETE:
            let complete = action.completeSessions;
            return Object.assign({}, complete);
        default:
            return state;
    }
};

export default CompleteSessionsReducer;
