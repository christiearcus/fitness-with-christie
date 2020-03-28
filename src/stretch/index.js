import React from "react";
import { Link } from "react-router-dom";
import stretches from "./stretchData";

import "../App.css";

const Stretch = () => {
  return (
    <div>
      <Link className="App-button-link" to="/">
        <i class="fas fa-arrow-left"></i>
        Back to home
      </Link>
      <ul className="Fitness-list">
        {stretches.map(stretch => {
          return <li>{stretch}</li>;
        })}
      </ul>
    </div>
  );
};

export default Stretch;
