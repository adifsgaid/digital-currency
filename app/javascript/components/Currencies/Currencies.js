import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

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

  const list = currencies.map((item) => {
    return <li key={item.attributes.name}>{item.attributes.name}</li>;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Digital Currencies Bible</h1>
        <div className="subHeader">
          Honest Reviews About Your Favorite Currency
        </div>
        <div className="grid"></div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default Currencies;
