import React from "react";
import "./cards.css";

const cards = props => (
  <div className="card" value={props.id} onClick={() => props.click(props.id)}>
    <div className="img-container">
        <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default cards;