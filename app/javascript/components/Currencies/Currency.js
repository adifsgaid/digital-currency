import React from "react";

const Currency = (props) => {
  return (
    <div className="card">
      <div className="currency-logo">
        <img src={props.attributes.img_url} alt={props.attributes.name} />
      </div>
      <div className="currency-name">{props.attributes.name}</div>
      <div className="currency-score">{props.attributes.score}</div>
      <div className="currency-link">
        <a href={`/currencies/${props.attributes.slug}`}> View Currency</a>
      </div>
    </div>
  );
};

export default Currency;
