import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "../Fitness.css";

const FitnessList = ({ items }) => {
  return (
    <>
      <div>
        <Link className="App-button-link" to="/">
          <i class="fas fa-arrow-left"></i>
          Back to home
        </Link>
      </div>
      <ul className="Fitness-list">
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default FitnessList;
