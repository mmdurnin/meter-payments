import React from "react";
import "../stylesheets/main.scss";
// import { Route, Redirect, Switch, Link } from "react-router-dom";
// import { Nav } from "./nav/nav";
import { Header } from "./header/header";
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