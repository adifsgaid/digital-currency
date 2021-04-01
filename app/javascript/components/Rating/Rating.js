import React from "react";
import "./Rating.css";

function Rating(props) {
  const rating = (props.rating / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: rating + "%" }}></span>
    </span>
  );
}

export default Rating;
