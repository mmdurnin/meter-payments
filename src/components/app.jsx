import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import MeterAnalytics from './meter-analytics'

export const App = () => (
    <div>
        <Header />
        <div className="row body">
            {/* <Nav /> -- save Nav for later if needed*/}
            <MeterAnalytics />
        </div>
    </div>
);