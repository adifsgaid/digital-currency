import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Currency from "./Currency";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  width: 100%;
`;
const Header = styled.div`
  padding: 10px 100px 10px 50px;
  h1 {
    font-size: 42px;
    font-family: sans-serif;
  }
`;
const SubHeader = styled.div`
  font-size: 26px;
  font-weight: 300;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

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
    <Home>
      <Header>
        <h1>Digital Currencies Bible</h1>
        <SubHeader>Honest Reviews About Your Favorite Currency</SubHeader>
        <Grid>{grid}</Grid>
      </Header>
    </Home>
  );
};

export default Currencies;
