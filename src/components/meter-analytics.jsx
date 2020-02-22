import React from 'react';
import "../stylesheets/main.scss";
import Filters from './filters/filters';
import ActiveSessions from './charts/active-sessions';
import CompleteSessions from './charts/complete-sessions';

const MeterAnalytics = () => (
    <div className="fill column analytics">
        <Filters />
        <ActiveSessions />
        <CompleteSessions />
    </div>
);

export default MeterAnalytics;