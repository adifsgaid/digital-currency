import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Currency = (props) => {
  return (
    <div className="card">
      <div className="currency-logo">
        <img src={props.attributes.img_url} alt={props.attributes.name} />
      </div>
      <div className="currency-name">{props.attributes.name}</div>
      <div className="currency-score">{props.attributes.avg_score}</div>
      <div className="currency-link">
        <Link to={`/currencies/${props.attributes.slug}`}> View Currency</Link>
      </div>
    </div>
  );
};

export default Currency;
