import React from "react";
import { connect } from "react-redux";
import "../../stylesheets/charts.scss";

const CompleteSessions = props => {
    return (
        <div className="complete-chart-container">
            <h1>Complete Sessions</h1>
            <div className="complete-section chart">
                <div className="chart-content row">
                    <h3>Meter Zone</h3>
                    <h3>Start Date</h3>
                    <h3>Start Time</h3>
                    <h3>End Date</h3>
                    <h3>End Time</h3>
                    <h3>Plate Number</h3>
                    <h3>Plate State</h3>
                    <h3>Amount Paid</h3>
                </div>
                <div>
                    {props.completeSessions.map((item, i) => {

                        let dateStart = new Date(`${item.start_time.slice(0, 10)}` + ' ' + `${item.start_time.slice(11, 17)}`);
                        let startMinutes = dateStart.getMinutes();
                        startMinutes = startMinutes < 10 ? '0' + startMinutes : startMinutes;

                        let dateEnd = new Date(`${item.end_time.slice(0, 10)}` + ' ' + `${item.end_time.slice(11, 17)}`);
                        let endMinutes = dateEnd.getMinutes();
                        endMinutes = endMinutes < 10 ? '0' + endMinutes : endMinutes;

                        return (
                            <div key={i} className="chart-content row">
                                <h4>{item.external_meter_id}</h4>
                                <h4>
                                    {dateStart.getMonth() + 1}-{dateStart.getDate()}-{dateStart.getFullYear()}
                                </h4>
                                <h4>
                                    {dateStart.getHours()}:{startMinutes}
                                </h4>
                                <h4>
                                    {dateEnd.getMonth() + 1}-{dateEnd.getDate()}-{dateEnd.getFullYear()}
                                </h4>
                                <h4>
                                    {dateEnd.getHours()}:{endMinutes}
                                </h4>
                                <h4>{item.license_plate}</h4>
                                <h4>{item.license_plate_state}</h4>
                                <h4>${item.amount_paid}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const msp = state => ({
    completeSessions: Object.values(state.entities.completeSessions)
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(CompleteSessions);
