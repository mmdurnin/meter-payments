import React, { useState, useEffect } from 'react';
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