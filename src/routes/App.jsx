//dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//containers
import Home from "../containers/Home";
import RedeemHistory from "../containers/RedeemHistory";
import NotFound from "../containers/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/StoreRomeroCynthia" component={Home} />
        <Route exact path="/History" component={RedeemHistory} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
