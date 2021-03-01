import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Currency from "./Currency";

export const Currencies = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    axios
      .get("api/v1/currencies.json")
      .then((response) => {
        setCurrencies(response.data.data);
      })
      .catch((response) => console.log(response));
  }, [currencies.length]);

  const grid = currencies.map((item) => {
    return <Currency key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Digital Currencies Bible</h1>
        <div className="subHeader">
          Honest Reviews About Your Favorite Currency
        </div>
        <div className="grid"></div>
        <ul>{grid}</ul>
      </div>
    </div>
  );
};

export default Currencies;
