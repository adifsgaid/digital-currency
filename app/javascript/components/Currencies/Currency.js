import React from "react";

const Currency = (props) => {
  return (
    <div className="card">
      <div className="currency-logo">{props.attributes.img_url}</div>
      <div className="currency-name">{props.attributes.name}</div>
      <div className="currency-score">{props.attributes.score}</div>
      <div className="currency-link"></div>
    </div>
  );
};

export default Currency;
