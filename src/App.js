import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hiit from "./hiit";
import Stretch from "./stretch";
import Debug from "./debug";

import "./App.css";

const Home = () => {
  return (
    <div className="App">
      <div className="Home-welcome">
        <h1>How do you want to workout?</h1>
        <div className="Home-links">
          <Link className="App-button-link" to="/hiit">
            HIIT
          </Link>
          <Link className="App-button-link" to="/stretch">
            Stretch
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/debug">
          <Debug />
        </Route>
        <Route path="/stretch">
          <Stretch />
        </Route>
        <Route path="/hiit">
          <Hiit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
