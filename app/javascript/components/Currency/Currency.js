import React, { useState, useEffect } from "react";
import axios from "axios";

export const Currency = (props) => {
  const [currency, setCurrency] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/currencies/${slug}`;

    axios
      .get(url)
      .then((response) => setCurrency(response.data))
      .catch((response) => console.log(response));
  }, []);

  return (
    <div className="wrapper">
      <div className="column">
        <div className="header"></div>
        <div className="review"></div>
      </div>
      <div className="column">
        <div className="review-form">[review form]</div>
      </div>
    </div>
  );
};

export default Currency;
