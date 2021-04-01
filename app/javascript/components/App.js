import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Currencies from "./Currencies/Currencies";
import Currency from "./Currency/Currency";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Currencies} />
      <Route exact path="/Currencies/:slug" component={Currency} />
    </Switch>
  );
};

export default App;
