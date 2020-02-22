import React from "react";
import "../../stylesheets/header.scss";

export const Header = () => (
    <div className="header row">
        <img src={window.icon} />
        <p>
            Spot<strong>Angels</strong> - meter analytics
    </p>
    </div>
);
