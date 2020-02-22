import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMeterData } from '../../actions/meter-actions';
const FileDownload = require('js-file-download');

const Filters = ({ fetchMeterData }) => {
    const now = new Date();
    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let day = now.getDate() < 10 ? '0' + (now.getDate()) : now.getDate();
    const dateNow = now.getFullYear() + '-' + month + '-' + day;

    const timeStart = '00:00:00'
    const timeEnd = '23:59:00'

    let [startDate, setStartDate] = useState(dateNow);
    let [startTime, setStartTime] = useState(timeStart);
    let [endDate, setEndDate] = useState(dateNow);
    let [endTime, setEndTime] = useState(timeEnd);
    let [meterZone, setZone] = useState("");
    let [licensePlate, setPlate] = useState("");

    const getValue = ((date) => {
        let split = date.split("-").join("")
        return Number(split)
    })

    if (getValue(startDate) > getValue(endDate)) {
        setEndDate(startDate)
    }

    useEffect(() => {
        let start = startDate + " " + startTime;
        let end = endDate + " " + endTime;
        fetchMeterData(start, end, meterZone, licensePlate);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let start = startDate + ' ' + startTime;
        let end = endDate + ' ' + endTime;
        fetchMeterData(start, end, meterZone, licensePlate);
    };

    const exportRecords = (e) => {
        e.preventDefault();
        let start = startDate + ' ' + startTime;
        let end = endDate + ' ' + endTime;
        let queryString = `?city_id=56&start_time=${start}&end_time=${end}`;
        if (meterZone !== "") queryString = queryString.concat(`&external_meter_id=${meterZone}`)
        if (licensePlate !== "") queryString = queryString.concat(`&license_plate=${licensePlate}`)
        return $.ajax({
            url: ` https://angels-api-staging.spotangels.com/api/v3/meters/analytics${queryString}&csv=true`,
            method: "GET"
        }).then((file) => {
            FileDownload(file, 'meter-report.csv');
        })
    }

    return (
        <div className="column filter-section">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <h4>Start:</h4>
                    <input type="date" className="filter-input" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    <input type="time" className="filter-input" value={startTime} onChange={e => setStartTime(e.target.value)} />
                </div>
                <div className="row">
                    <h4>End:</h4>
                    <input type="date" className="filter-input" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    <input type="time" className="filter-input" value={endTime} onChange={e => setEndTime(e.target.value)} />
                </div>

                <div className="row">
                    <h4>Meter Zone:</h4>
                    <input type="text" placeholder="all meter zones" value={meterZone} onChange={e => setZone(e.target.value)} />
                    <h4>License Plate:</h4>
                    <input type="text" placeholder="all license plates" value={licensePlate} onChange={e => setPlate(e.target.value)} />
                </div>

                <div className="row">
                    <input type="submit" />
                    <button alt="Download as CSV" onClick={exportRecords}>Export</button>
                </div>

            </form>
        </div>
    );
};

const msp = state => ({
    activeSessions: state.entities.activeSessions,
    completeSessions: state.entities.completeSessions
});

const mdp = dispatch => ({
    fetchMeterData: (start, end, zone, plate) =>
        dispatch(fetchMeterData(start, end, zone, plate))
});

export default connect(msp, mdp)(Filters);
