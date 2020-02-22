import * as MeterAPIUtil from "../util/analytics-api";

export const RECEIVE_ACTIVE = "RECEIVE_ACTIVE";
export const RECEIVE_COMPLETE = "RECEIVE_COMPLETE";

const receiveActive = activeSessions => ({
    type: RECEIVE_ACTIVE,
    activeSessions
});

const receiveComplete = completeSessions => ({
    type: RECEIVE_COMPLETE,
    completeSessions
});

export const fetchMeterData = (
    start_time,
    end_time,
    meter_zone,
    plate,
    city_id = "56") => dispatch => {
    return MeterAPIUtil.fetchMeterData(
        city_id,
        start_time,
        end_time,
        meter_zone,
        plate
    ).then(meterData => {
        dispatch(receiveActive(meterData["meters"]["active_meters_sessions"]))
        dispatch(receiveComplete(meterData["meters"]["done_meters_session"]));
    });
};
