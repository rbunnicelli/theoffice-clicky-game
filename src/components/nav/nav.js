import React from "react";
import "./nav.css";

const nav = props => (
    <nav>
        <ul>
            <li className="title">
                <a href="/clickygame">{props.title}</a>
            </li>

            <li id="rightWrong">{props.rightOrWrong}</li>

            <li id="currentScore">Current Score: {props.score}</li>

            <li id="highScore">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default nav;