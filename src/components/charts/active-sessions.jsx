import React from "react";
import { connect } from "react-redux";
import "../../stylesheets/charts.scss";

const ActiveSessions = props => {

    return (
        <div className="active-chart-container">
            <h1>Active Sessions</h1>
            <div className="active-section chart">
                <div className="chart-content row">
                    <h3>Meter Zone</h3>
                    <h3>Start Date</h3>
                    <h3>Start Time</h3>
                    <h3>Max Duration</h3>
                    <h3>Plate Number</h3>
                    <h3>Plate State</h3>
                </div>
                <div>
                    {props.activeSessions.map((item, i) => {
                        let date = new Date(`${item.start_time.slice(0, 10)}` + ' ' + `${item.start_time.slice(11, 17)}`);;
                        let minutes = date.getMinutes();
                        minutes = minutes < 10 ? '0' + minutes : minutes;

                        return (
                            <div key={i} className="chart-content row">
                                <h4>{item.external_meter_id}</h4>
                                <h4>
                                    {date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()}
                                </h4>
                                <h4>
                                    {date.getHours()}:{minutes}
                                </h4>
                                <h4>{item.max_requested_duration} Minutes</h4>
                                <h4>{item.license_plate}</h4>
                                <h4>{item.license_plate_state}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const msp = state => ({
    activeSessions: Object.values(state.entities.activeSessions)
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(ActiveSessions);

// 0:
// external_meter_id: 60679
// max_requested_duration: 120
// license_plate: "Test1"
// license_plate_state: "CA"
// start_time: "2020-02-01T15:34:00.000-05:00"
// end_time: "2020-02-01T15:39:00.000-05:00"
// amount_paid: null