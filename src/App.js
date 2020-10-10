import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import PrivateRoute from "./utils/PrivateRoute";
import AnimalDashBoard from "./components/AnimalDashboard";
import AddAnimal from "./components/AddAnimal";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* Build out a Private Route for both Animal Dashboard + Add Animal*/}
        <Route exact path="/creatures" component={AnimalDashBoard} />
        <PrivateRoute exact path="/add" component={AddAnimal} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}
