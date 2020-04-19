import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "../components/header";
import NewCustomTask from "../components/newCustomTask";
import AllCustomTask from "../components/allCustomTask";

const Routes = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NewCustomTask/>
          </Route>
          <Route exact path="/all">
            <AllCustomTask/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
