import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hiit from "./hiit";
import Stretch from "./stretch";

import "./App.css";

const Home = () => {
  return (
    <div className="App">
      <h1>How do you want to workout?</h1>
      <Link to="/hiit">HIIT</Link>
      <Link to="/stretch">Stretch</Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
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
