import React from "react";
import "../../stylesheets/header.scss";
import icon from '../../icon.png';

export const Header = () => (
    <div className="header row">
        <img src={icon} alt="spot angels" />
        <p>
            Spot<strong>Angels</strong> - meter analytics
        </p>
    </div>
);
